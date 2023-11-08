import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TourguideApiService } from '../services/guides-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from 'src/app/shared/delete-confirm/delete-confirm.component';




  
@Component({
  selector: 'app-tourguide-bookorder-list',
  templateUrl: './tourguide-bookorder-list.component.html',
  styleUrls: ['./tourguide-bookorder-list.component.css']
})
export class TourguideBookorderListComponent {
  @Input() orders !:any;
  @Output() updated = new  EventEmitter()
  errors: string[] = [];
  p: number = 1;
  itemsPerPage: number = 6;
  constructor(private guidesApiService: TourguideApiService,
    private modalService: NgbModal) {}


    acceptOrder(id:number){
this.errors = [];
const modalRef = this.modalService.open(DeleteConfirmComponent);
modalRef.result.then(
  (result) => {
    if (result === 'confirm') {
      this.guidesApiService.AcceptTourGuideOrder(id).subscribe(
        (data) => {    
      this.updated.emit(data);  
        },
        (error) => {
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.errors.push(error[0]);
            });
          } else {
            this.errors.push('An error occurred while updating, please try again later.')
          }
        });
    } else {
    }
  },
  (reason) => {}
);
    }
    rejectOrder(id:number){
      
this.errors = [];
const modalRef = this.modalService.open(DeleteConfirmComponent);
modalRef.result.then(
  (result) => {
    if (result === 'confirm') {
      this.guidesApiService.RejectTourGuideOrder(id).subscribe(
        (data) => {    
      this.updated.emit(data);  
        },
        (error) => {
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.errors.push(error[0]);
            });
          } else {
            this.errors.push('An error occurred while updating, please try again later.')
          }
        });
    } else {
    }
  },
  (reason) => {}
);
      
    }

  scrollToTop(pageNumber: number) {
    this.p = pageNumber; // Update the current page number
    const contentContainer = document.querySelector('.orders');
    const anchorElement = document.querySelector('[name="contentTop"]');
    if (contentContainer && anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }





}

