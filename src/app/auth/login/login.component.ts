import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  repeatPass: string = 'none';
  submitted = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  loginSubmitted() {
    const enteredEmail = this.Email.value;
    const enteredPwd = this.PWD.value;
  
    const data = localStorage.getItem('formData');
    const storedData = JSON.parse(data!);
  
    if (enteredEmail === storedData.email && enteredPwd === storedData.pwd) {
      setTimeout(function() {
        window.location.href = '/homepage';
      }, 1000);
    } else {
      alert('Incorrect email or password');
    }
  }
  
  
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
}