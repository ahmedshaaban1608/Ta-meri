import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../services/hotel-api.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent implements OnInit {
  TextValue: string = '';
  guides: TourGuide[] = [];

  constructor(
    private router: Router,
    private hotelApiService: HotelApiService
  ) {}

  ngOnInit(): void {
    this.getAllGuides();
  }

  getAllGuides() {
    this.hotelApiService.getHotelOffers().subscribe(
      (result) => {
        this.guides = result;
      },
      (err) => {
        alert('Cannot load data of guides from the API.');
      }
    );
  }

  moreDetails(id: number) {
    this.router.navigate(['hotel-review', id]);
  }

  getTypedLines(tourGuide: TourGuide): string[] {
    return [tourGuide.name, tourGuide.address, 'From: ' + tourGuide.startdate + ' to: ' + tourGuide.enddate];
  }
}