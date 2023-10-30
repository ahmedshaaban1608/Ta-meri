import { Component } from '@angular/core';
import { TourguideApiService } from '../services/guides-api.service';
import { Ireview } from '../interface/ireview';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourguide-own-page',
  templateUrl: './tourguide-own-page.component.html',
  styleUrls: ['./tourguide-own-page.component.css']
})
export class TourguideOwnPageComponent {
  id: any;
  constructor(
    private tourguideApi: TourguideApiService,
    private titleService: Title,
    private activateRoute: ActivatedRoute
  ) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  tourguide: any = {};
  reviews: Array<Ireview> = [];

  // ngOnInit() {
  //   this.id = this.activateRoute.snapshot['params']['id'];

  //   this.tourguideApi.getTourGuideById(this.id).subscribe((data) => {
  //     this.tourguide = data;
  //     this.titleService.setTitle('Tour guide: ' + this.tourguide['name']);
  //   });

  //   this.tourguideApi
  //     .getTourGuideReviews()
  //     .subscribe((data) => (this.reviews = Object.values(data)));
  //  }
}
