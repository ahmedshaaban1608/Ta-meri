import { Component, Input } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  defaultCity: string[] = [
    "Cairo",
    "Giza",
    "Luxor",
    "Aswan",
    "Alexandria",
    "Sharm El Sheikh",
    "Hurghada",
    "Dahab",
    "Siwa Oasis",
    "Marsa Alam",
    "Abu Simbel",
    "El Minya",
    "Ismailia",
    "Port Said",
    "Taba",
  ];;
  constructor(private fb: FormBuilder, private calendar: NgbCalendar) {
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
  this.areas = this.areas && this.areas.length? this.areas: this.defaultCity
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
    this.to = this.to ? this.to : this.from

    this.BookingForm.markAllAsTouched();
  
    if(this.BookingForm.valid){
      console.log({...this.BookingForm.value, tourguide_id: this.id, from: this.from, to: this.to});

    } else{
      
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
