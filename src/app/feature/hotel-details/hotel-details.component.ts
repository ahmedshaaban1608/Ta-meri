import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DetailsService} from '../tourguides/service/details.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel: TourGuide | null = null;
  hotels: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private detailsApiService:  DetailsService,
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;

    this.route.params.subscribe((params) => {
      const hotrlId = params['id'];
      this.detailsApiService.getProductById(hotrlId).subscribe(
        (hotel) => {
          this.hotel = hotel;
          console.log('Fetched product:', hotel);
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    });
  }
}
// {
//   hotels: any[] = [];
//   constructor(
//     private activeRouter: ActivatedRoute,
//     private linkHotels: ApiHotelService
//   ) {}

//   ngOnInit(): void {
   
//     const hotelId = this.activeRouter.snapshot.params['id'];

//     this.linkHotels.getHotelById(hotelId).subscribe((result) => {
//       console.log(result);
//       this.hotels[0] = result;
//     });
//   }
//   Book(item: any) {
//     console.log('booked');
//   }
// }
