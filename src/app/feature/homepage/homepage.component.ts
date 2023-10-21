import { Component } from '@angular/core';
import { HotelApiService } from '../services/hotel-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  hotels!: any[];
  facts = [
    {
      number: 5,
      text: 'Team Members',
      class: 'fas fa-users',
    },
    {
      number: 2154,
      text: 'Happy Clients',
      class: 'fas fa-users',
    },
    {
      number: 75,
      text: 'Hotels',
      class: 'fas fa-hotel',
    },
    {
      number: 30,
      text: 'Tour guides',
      class: 'fas fa-user-tie',
    },
  ];
  constructor(private hotelApi: HotelApiService) {}
  ngOnInit() {
    this.hotelApi.getAllHotels().subscribe((result) => {
      this.hotels = Object.values(result);
     
    });
  }

}
