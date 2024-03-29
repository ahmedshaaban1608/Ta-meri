import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelApiService } from '../services/hotel-api.service';
import { TourGuide } from '../interface/tour-guide';
@Component({
  selector: 'app-hotel-review',
  templateUrl: './hotel-review.component.html',
  styleUrls: ['./hotel-review.component.css']
})
export class HotelReviewComponent {

constructor(
  private router: Router,
  private HotelApiService: HotelApiService
  ) {}

  TextValue: string = '';
  guides: TourGuide[] = [];
  p:number=1;
  itemsPerPage:number=4;
  totalHotel:any;

  ngOnInit(): void {

  this.getAllGuides();
  }

  getAllGuides() {
  this.HotelApiService. getFeedbackHotels().subscribe(
  (result) => {
  this.guides = result;
  this.totalHotel=result.length;
  },
  (err) => {
  alert('can not load data of guides from api');
  }
  );
  }

  moreDetails(id: number) {
  this.router.navigate(['hotel-review', id]);
  }


  getTypedLines(tourGuide: TourGuide): string[] {
    return [tourGuide.address, tourGuide.comment ,'star: ' + tourGuide.star];
    }
  }
