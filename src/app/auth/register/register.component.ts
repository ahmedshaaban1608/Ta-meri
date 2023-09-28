import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';

  constructor() {}


ngOnInit(): void{}
  RPWD: FormControl = new FormControl();

  registerForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/)
    ]),
    email: new FormControl('', [Validators.required,Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    gender: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    country: new FormControl('', [Validators.required]),
    rpwd: new FormControl(''),
  });
  registerSubmited() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.pwd === this.registerForm.value.rpwd) {
        this.repeatPass = 'none';
  
        const formData = JSON.stringify(this.registerForm.value);
        localStorage.setItem('formData', formData);
        console.log('Form data saved successfully!');
        
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
      } else {
        this.repeatPass = 'inline';
        console.log('Passwords do not match!');
      }
    } else {
      console.log('Form is invalid!');
    }
  }
  showAlert() {
    const inputs = document.querySelectorAll('input');
    let allInputsFilled = true;
  
    inputs.forEach(input => {
      if (!input.value) {
        allInputsFilled = false;
      }
    });
  
    if (allInputsFilled && this.registerForm.valid && this.registerForm.value.pwd === this.registerForm.value.rpwd) {
      alert('Registration successful!');
    }

 
  }
  allFieldsFilled(): boolean {
    const inputs = document.querySelectorAll('input');
    let allInputsFilled = true;
  
    inputs.forEach(input => {
      if (!input.value) {
        allInputsFilled = false;
      }
    });
  
    return allInputsFilled;

  }
  

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  get Country(): FormControl {
    return this.registerForm.get("country") as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }

}