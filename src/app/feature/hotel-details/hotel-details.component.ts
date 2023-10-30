import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {  HotelApiService } from '../services/hotel-api.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  hotelId!: number;
  @Input() hotel!: any;

  constructor(
    private route: ActivatedRoute,
    private  HotelApiService:  HotelApiService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.hotelId = params['id'];
      this. HotelApiService.getHotelById(this.hotelId).subscribe(
        (hotel) => {
          this.hotel = hotel;
          this.titleService.setTitle('Hotel: ' + this.hotel['title']);
        },
        (error) => {
          console.error('Error fetching hotel:', error);
        }
      );
    });
  }
}