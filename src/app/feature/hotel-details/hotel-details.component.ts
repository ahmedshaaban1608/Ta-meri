import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiHotelService } from 'src/app/auth/services/hotel/api-hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent {
  hotel!: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private linkHotels: ApiHotelService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const hotelId = this.activeRouter.snapshot.params['id'];

    this.linkHotels.getHotelById(hotelId).subscribe((result) => {
      console.log(result);

      this.hotel = result;
      this.titleService.setTitle('Hotel: ' + this.hotel['title']);
    });
  }
  Book(item: any) {
    console.log('booked');
  }
}
