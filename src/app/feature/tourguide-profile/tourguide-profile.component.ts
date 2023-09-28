import { Component } from '@angular/core';
import { TourguideApiService } from '../services/tourguide-api.service';

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

  ngOnInit() {
    const data = this.tourguideApi
      .getTourGuideByUsername()
      .subscribe((data) => (this.tourguide = data));
    console.log(data);
  }
}
