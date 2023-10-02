import { Component } from '@angular/core';
import { TourguideApiService } from '../services/tourguide-api.service';
import { Ireview } from '../interface/ireview';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tourguide-profile',
  templateUrl: './tourguide-profile.component.html',
  styleUrls: ['./tourguide-profile.component.css'],
})
export class TourguideProfileComponent {
  constructor(
    private tourguideApi: TourguideApiService,
    private titleService: Title
  ) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  tourguide: any = {};
  reviews: Array<Ireview> = [];

  ngOnInit() {
    this.tourguideApi.getTourGuideByUsername().subscribe((data) => {
      this.tourguide = data;
      this.titleService.setTitle('Tour guide: ' + this.tourguide['name']);
    });

    this.tourguideApi
      .getTourGuideReviews()
      .subscribe((data) => (this.reviews = Object.values(data)));
  }
}
