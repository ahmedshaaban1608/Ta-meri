import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './shared/api.service';


@Component({
  selector: 'app-tourguide-bookorder-list',
  templateUrl: './tourguide-bookorder-list.component.html',
  styleUrls: ['./tourguide-bookorder-list.component.css']
})
export class TourguideBookorderListComponent {
formValue !: FormGroup;

constructor(private Formbuilder: FormBuilder, private api: ApiService) {}

employeeData !:any;
ngOnInit(): void {
  this.formValue = this.Formbuilder.group({
    fullname: [''],
    Number: [''],
    locations: [''],
    dates: [''],
    salary: ['']
  })
  this.getAllEmployee();
}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData = res;
    this.saveDataToLocalStorage(res);

  })
}
deleteEmployee(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Booking Deleted");
    this.getAllEmployee();
  })
}
acceptBooking() {
  alert("Booking accepted successfully!");
}
saveDataToLocalStorage(data: any) {
  localStorage.setItem('employeeData', JSON.stringify(data));
}
}

