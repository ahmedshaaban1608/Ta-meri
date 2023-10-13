import { Component } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  BookingForm: FormGroup;
  hoveredDate: NgbDate | null = null;
  customDisabledDates: NgbDate[] = [
    new NgbDate(2023, 11, 10), // Example custom disabled date
    new NgbDate(2023, 11, 15)  // Add more custom disabled dates as needed
  ];
  constructor(private fb: FormBuilder, private calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.BookingForm = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/),
        ],
      ],
    });
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
  
    // Update selectedDate whenever a date is selected
   
  }
  
  BookSubmitted() {
    console.log({...this.BookingForm.value, From: this.fromDate, To: this.toDate});
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
 

  isCustomDisabled(date: NgbDate): boolean {
    return this.customDisabledDates.some(
      disabledDate => disabledDate.equals(date)
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

    return date.before(ngbDate) || this.isCustomDisabled(date);
  };

}
