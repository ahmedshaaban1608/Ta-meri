
import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ToursitProfileService } from '../tourguides/service/toursit-profile.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toursit-profile',
  templateUrl: './toursit-profile.component.html',
  styleUrls: ['./toursit-profile.component.css']
})
export class ToursitProfileComponent implements OnInit {
  @ViewChildren('cardTextElements') cardTextElements!: QueryList<ElementRef>;

  guides: TourGuide[] = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalTourGuid: any;

  constructor(private touristProfileService: ToursitProfileService, private router: Router) {
    
  }

  
ngOnInit(): void {
  this.touristProfileService.getProducts().subscribe(
    (data: TourGuide[]) => {
      this.guides = data;
      this.totalTourGuid = data.length;
      for (const guide of this.guides) {
        guide.isPaymentButtonVisible = guide.reservation_status === 'accepted' || guide.reservation_status === 'rejected';
      }
    },
    (error: any) => {
      console.error('Error fetching tour guides:', error);
    }
  );
}
  goToGuideDetails(id: number): void {
    this.router.navigate(['tourguides', id]);
  }
}
