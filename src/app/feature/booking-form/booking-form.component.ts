import { Component, Input, SimpleChanges } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Input() id!:number;
  @Input() areas:any[] = [];
  @Input() price!:number;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  BookingForm: FormGroup;
  hoveredDate: NgbDate | null = null;
errors: string[] = [];
from!: string;
to: string = '';
  defaultCity: any[] = [
    {area:"Cairo"},
    {area:"Giza"},
    {area:"Luxor"},
    {area:"Aswan"},
    {area:"Alexandria"},
    {area:"Sharm El Sheikh"},
    {area:"Hurghada"},
    {area:"Dahab"},
    {area:"Siwa Oasis"},
    {area:"Marsa Alam"},
    {area:"Abu Simbel"},
    {area:"El Minya"},
    {area:"Ismailia"},
    {area:"Port Said"},
    {area:"Taba"},
  ];
  cities:any[] = []
  isSubmited: boolean = false
  BookingSubmitted: boolean = false;;
  constructor(private fb: FormBuilder, private calendar: NgbCalendar,   private apiService:ToursitDetailsService,
    private auth: AccountsApiService,) {
    this.fromDate = calendar.getToday();
    this.from = this.fromDate.year +'-'+this.fromDate.month +'-'+this.fromDate.day;
    this.BookingForm = new FormGroup({

      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\+?\d{7,14}$/),
  
      ]),
      comment: new FormControl('', [
        Validators.required,
     
  
      ]),
      city: new FormControl('', [
        Validators.required,
     
  
      ]),

    });
  }

ngOnInit(){
  this.BookingSubmitted = false;
}
ngOnChanges(changes: SimpleChanges) {
  if (changes['areas'] && changes['areas'].currentValue) {
  this.cities = this.areas && this.areas.length? this.areas: this.defaultCity;
}
}
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.from = this.fromDate.year +'-'+this.fromDate.month +'-'+this.fromDate.day;
    this.to = this.toDate?.year? this.toDate?.year +'-'+this.toDate?.month +'-'+this.toDate?.day : '';

  }

  getDayDifference(): number {
    const timeDifference = new Date(this.to).getTime() - new Date(this.from).getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  }
  
  BookSubmitted() {
    this.isSubmited = true
    this.errors = [];
    this.errors.push('sending request...')

    this.to = this.to ? this.to : this.from

    this.BookingForm.markAllAsTouched();
    if(!this.auth.isAuthenticated()){
      this.errors.push('You should log in to add make an order.')
      return;
    }
    if(this.BookingForm.valid){
      if(this.auth.isTourist()){
        this.apiService
        .bookTourguide({...this.BookingForm.value, tourguide_id: this.id, from: this.from, to: this.to})
        .subscribe((data: HttpResponse<any>) => {
          if (data.status === 200) {  
           
            this.BookingSubmitted = true;
             
          } 
        },
        (error) => {
          this.isSubmited = false
          this.errors = [];
          console.log(error);
          
          if (error.status === 401) {
            this.errors.push(error.error.message);
        } else {         
          this.errors.push('An error occurred while making the order, please try again later.')
        }
        });
      } else{
        this.errors.push('Only tourists are allowed to create order.')
      }
      return;
  }
}

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }
 


  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
  isDisabled = (date: NgbDate) => {
    const today = new Date();
    const ngbDate = new NgbDate(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return date.before(ngbDate)
  };

}
