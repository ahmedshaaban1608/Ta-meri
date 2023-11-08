import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from '../services/contactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  ContactForm: FormGroup;
myEmail: string = 'support@ta-meri.com';
errors: string[] = [];
isSending: boolean = false
  constructor(private contactApi: ContactusService, private router :Router) {
    this.ContactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      message:  new FormControl('', [
        Validators.required,
        Validators.minLength(20),

      ]),
    });
  }

  formSubmited() {
    this.isSending = true
    this.errors = []
    this.errors.push('sending...')

    this.ContactForm.markAllAsTouched();
    if (this.ContactForm.valid) {
     this.contactApi.contactUs(this.ContactForm.value).subscribe((data)=>{
console.log(data);

      this.router.navigate(['/notification'], { queryParams: { notify: 'contact' }});


     },(error)=>{
      console.log(error);
      this.isSending = false
      this.errors = []
this.errors.push('An error occurred while sending message, please try again later.')
     })
     
    }
  }
  get name(): FormControl {
    return this.ContactForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.ContactForm.get('email') as FormControl;
  }
  get subject(): FormControl {
    return this.ContactForm.get('subject') as FormControl;
  }
  get message(): FormControl {
    return this.ContactForm.get('message') as FormControl;
  }

}
