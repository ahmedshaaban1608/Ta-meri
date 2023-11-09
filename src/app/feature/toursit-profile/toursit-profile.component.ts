import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-toursit-profile',
  templateUrl: './toursit-profile.component.html',
  styleUrls: ['./toursit-profile.component.css']
})
export class ToursitProfileComponent{
  @ViewChildren('cardTextElements') cardTextElements!: QueryList<ElementRef>;

  @Input() orders: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
 

  constructor(private router:Router) {}


  goToPaymentDetails(id: number): void {
    // this.router.navigate([environment.backEndUrl, id]);
    window.location.href = `${environment.backEndUrl}/orderpayment/${id}`
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