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
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
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
      this.sendMessage.reset();
    } else {
    }
  }
}
