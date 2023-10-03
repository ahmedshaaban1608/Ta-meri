import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  sendMessage: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.sendMessage = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.sendMessage.valid) {
      this.formSubmitted = true;
      console.log(this.sendMessage.value);
      this.sendMessage.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
