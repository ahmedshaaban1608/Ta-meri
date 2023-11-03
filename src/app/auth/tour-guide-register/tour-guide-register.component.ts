import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsApiService } from '../services/accounts-api.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-tour-guide-register',
  templateUrl: './tour-guide-register.component.html',
  styleUrls: ['./tour-guide-register.component.css']
})
export class TourGuideRegisterComponent {
  errors: string[] = [];
maxDate: any;
  constructor(private auth: AccountsApiService, private router:Router) {
    this.maxDate = new Date().toISOString().split('T')[0]; 
  } 


ngOnInit(): void{}
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
    day_price: new FormControl('', [Validators.required, Validators.min(1),Validators.max(1000), Validators.pattern(/^\d{1,}$/)]),
    birth_date: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    bio:  new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    description:  new FormControl('', [
      Validators.required,
      Validators.minLength(100),
      Validators.maxLength(1000),
    ]),
  });
  registerSubmited() {
    this.errors = []
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      
      this.auth.createTourguide(this.registerForm.value).subscribe(
        (data: HttpResponse<any>) => {    
          // Check the status code
          if (data.status === 200) {  
           
            this.router.navigate(['/notification'], { queryParams: { notify: 'tourguide-signup' }});
          } 
        },
        (error) => {
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

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get birth_date(): FormControl {
    return this.registerForm.get('birth_date') as FormControl;
  }
  get day_price(): FormControl {
    return this.registerForm.get('day_price') as FormControl;
  }
  get bio(): FormControl {
    return this.registerForm.get('bio') as FormControl;
  }
  get description(): FormControl {
    return this.registerForm.get('description') as FormControl;
  }

}
