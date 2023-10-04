import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelApiService } from '../services/hotel-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  constructor(private hotelLink: HotelApiService, private router: Router) {}
  hotels!: any[];
  TextValue: string = '';

  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels() {
    this.hotelLink.getAllHotels().subscribe((result) => {
      this.hotels = Object.values(result);
    });
  }
}
