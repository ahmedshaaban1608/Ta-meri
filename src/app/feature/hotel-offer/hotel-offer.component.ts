import { Component } from '@angular/core';
import {HotelOfferApiService} from '../tourguides/service/hotel-offer-api.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent {


  constructor(
    private router: Router,
    private hotelOfferApi: HotelOfferApiService
    ) {}
  
    TextValue: string = '';
    guides: TourGuide[] = [];
    
    ngOnInit(): void {
   
    this.getAllGuides();
    }
    
    getAllGuides() {
    this.hotelOfferApi.getProducts().subscribe(
    (result) => {
    this.guides = result;
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
      return [tourGuide.name, tourGuide.address, 'From: ' + tourGuide.startdate + '____' + '  to: ' + tourGuide.enddate];
      }
    }
