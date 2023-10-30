import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './shared/api.service';




@Component({
  selector: 'app-tourguide-bookorder-list',
  templateUrl: './tourguide-bookorder-list.component.html',
  styleUrls: ['./tourguide-bookorder-list.component.css']
})
export class TourguideBookorderListComponent {
rejectBooking(id: any) {
throw new Error('Method not implemented.');
}
acceptBooking(id: any) {
throw new Error('Method not implemented.');
}
formValue !: FormGroup;

constructor() {}

@Input() orders !:any;

}

