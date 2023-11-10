import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsApiService } from '../services/accounts-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  repeatPass: string = 'none';
  errors: string[]=[];
  deviceName!: string;
  submitted = false;
  errorMessage: string = '';

  constructor(private router: Router, private auth: AccountsApiService) {}

  ngOnInit(): void {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('windows')) {
      this.deviceName = 'Windows';
    } else if (userAgent.includes('mac os')) {
      this.deviceName = 'macOS';
    } else if (userAgent.includes('android')) {
      this.deviceName = 'Android';
    } else if (userAgent.includes('linux')) {
      this.deviceName = 'Linux';
    }else  if (userAgent.includes('iphone')) {
      this.deviceName = 'iPhone';
    } else if (userAgent.includes('ipad')) {
      this.deviceName = 'iPad';
    } else {
      this.deviceName = 'Unknown device';
    }
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  loginSubmitted() {
    this.errors = []
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.auth.login({...this.loginForm.value, deviceName: this.deviceName}).subscribe(
        (data: HttpResponse<any>) => {    
          // Check the status code
          if (data.status === 200) {  
            console.log(data.body);
            
            const decodeUser = btoa(JSON.stringify(data.body));        
            localStorage.setItem('user', decodeUser);        
            this.router.navigate(['/']);
          } 
        },
        (error) => {
          if (error.status === 401) {
              this.errors.push(error.error.message);
          } else {         
            this.errors.push('An error occurred while creating the account, please try again later.')
          }
        }
      );
    }
  }
  
  
  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}