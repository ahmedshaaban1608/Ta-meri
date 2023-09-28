import { Component } from '@angular/core';
import { TourguideApiService } from '../services/tourguide-api.service';
import { Ireview } from '../interfaces/ireview';

@Component({
  selector: 'app-tourguide-profile',
  templateUrl: './tourguide-profile.component.html',
  styleUrls: ['./tourguide-profile.component.css'],
})
export class TourguideProfileComponent {
  constructor(private tourguideApi: TourguideApiService) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  tourguide: any = {};
  reviews: Array<Ireview> = [];

  ngOnInit() {
    this.tourguideApi
      .getTourGuideByUsername()
      .subscribe((data) => (this.tourguide = data));

    this.tourguideApi
      .getTourGuideReviews()
      .subscribe((data) => (this.reviews = Object.values(data)));
  }
}
