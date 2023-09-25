import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHotelService } from 'src/app/auth/services/hotel/api-hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent {
  hotels: any[] = [];
  constructor(
    private activeRouter: ActivatedRoute,
    private linkHotels: ApiHotelService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const hotelId = this.activeRouter.snapshot.params['id'];

    this.linkHotels.getHotelById(hotelId).subscribe((result) => {
      console.log(result);
      this.hotels[0] = result;
    });
  }
  Book(item: any) {
    console.log('booked');
  }
}
