import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountsApiService } from '../services/accounts-api.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    
  constructor(private auth: AccountsApiService) {}

  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/),
    ]),
   
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?\d{7,14}$/),

    ]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    country: new FormControl('', [Validators.required]),
  });
  registerSubmited() {
    this.errors = []
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      this.auth.createTourist(this.registerForm.value).subscribe(
        (data: HttpResponse<any>) => {
          console.log(data.status );
          
          // Check the status code
          if (data.status === 200) {  
            console.log('Request was successful');
            console.log(data.body); // Response data
          } 
        },
        (error) => {
          const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.errors.push(error[0]);
              
              
            });
        }
      );
    }
    
  }
  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.registerForm.get('phone') as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get Country(): FormControl {
    return this.registerForm.get('country') as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  


}
