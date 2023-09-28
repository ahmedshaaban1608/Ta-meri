import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHotelService } from 'src/app/auth/services/hotel/api-hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  constructor(private hotelLink: ApiHotelService, private router: Router) {}
  hotels: any[] = [];
  TextValue: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllHotels();
  }
  getAllHotels() {
    this.hotelLink.getAllHotels().subscribe(
      (result) => {
        this.hotels = Object.values(result)[0];
      },
      (err) => {
        alert('can not load data of hotels from api');
      }
    );
  }
  moreDetails(id: number) {
    this.router.navigate(['hotel', id]);
  }
  searchText(data: string) {
    this.TextValue = data;
    console.log(this.TextValue);
  }
}
