import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';
import { ToursitDetailsService } from '../services/toursit-details.service';


@Component({
  selector: 'app-toursit-details',
  templateUrl: './toursit-details.component.html',
  styleUrls: ['./toursit-details.component.css']
})
export class ToursitDetailsComponent{
  @Input() tourist: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalOrders: any;
@Output() updated = new  EventEmitter()
  errors: string[] = [];
  countries: string[] = [
    'United States',
    'France',
    'Italy',
    'Spain',
    'Thailand',
    'Japan',
    'Australia',
    'Greece',
    'Mexico',
    'Costa Rica',
    'Canada',
    'United Kingdom',
    'Germany',
    'Portugal',
    'China',
    'India',
    'Brazil',
    'Egypt',
    'South Africa',
    'New Zealand',
    'Argentina',
    'Peru',
    'Vietnam',
    'Cambodia',
    'Turkey',
    'Iceland',
    'Netherlands',
    'Switzerland',
    'Austria',
    'Croatia',
    'Ireland',
    'Norway',
    'Sweden',
    'Denmark',
    'Singapore',
    'Maldives',
    'Malaysia',
    'Indonesia',
    'Philippines',
    'South Korea',
    'Palastine',
    'Jordan',
    'Kenya',
    'Morocco',
    'Tanzania',
    'Chile',
    'Ecuador',
    'Russia',
    'Ukraine',
    'Belgium',
    'Hungary',
    'Poland',
    'Czech Republic',
    'Slovakia',
    'Romania',
    'Bulgaria',
    'Serbia',
    'Macedonia',
    'Slovenia',
    'Montenegro',
    'Bosnia and Herzegovina',
    'Luxembourg',
    'Finland',
    'Estonia',
    'Latvia',
    'Lithuania',
    'Cyprus',
    'Malta',
    'Andorra',
    'Monaco',
    'San Marino',
    'Vatican City',
    'Liechtenstein',
    'Nepal',
    'Bhutan',
    'Sri Lanka',
    'Bangladesh',
    'Pakistan',
    'Iran',
    'Iraq',
    'Georgia',
    'Armenia',
    'Uzbekistan',
    'Kazakhstan',
    'Kyrgyzstan',
    'Tajikistan',
    'Turkmenistan',
    // Add more countries as needed...
  ];
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: ToursitDetailsService) {
    this.updateForm = this.formBuilder.group({
      name: new FormControl(this.tourist.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/),
      ]),

      phone: new FormControl(this.tourist.phone, [
        Validators.required,
        Validators.pattern(/^\+?\d{7,14}$/),
      ]),

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tourist'] && changes['tourist'].currentValue) {
      this.updateForm.patchValue({
        name: this.tourist.name,
        phone: this.tourist.phone,
      });
    }
  }


  updateSubmited() {
    this.errors = []
    this.updateForm.markAllAsTouched();

    if (this.updateForm.valid) {      
      this.auth.updateProfile(this.updateForm.value).subscribe(
        (data) => {    
     
          this.updated.emit(data);
           
          
        },
        (error) => {         
          console.log(error);
           
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.errors.push(error[0]);
            });
          } else {
            this.errors.push('An error occurred while creating the account, please try again later.')
          }
         
          
      
        }
      );
    }
    
  }
  get name(): FormControl {
    return this.updateForm.get('name') as FormControl;
  }
  get phone(): FormControl {
    return this.updateForm.get('phone') as FormControl;
  }


}
