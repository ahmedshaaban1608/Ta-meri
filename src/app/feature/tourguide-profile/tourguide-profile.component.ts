import { Component } from '@angular/core';
import { TourguideApiService } from '../services/tourguide-api.service';
import { Ireview } from '../interface/ireview';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourguide-profile',
  templateUrl: './tourguide-profile.component.html',
  styleUrls: ['./tourguide-profile.component.css'],
})
export class TourguideProfileComponent {
  id: any;
  constructor(
    private tourguideApi: TourguideApiService,
    private titleService: Title,
    private activateRoute: ActivatedRoute,
  ) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  tourguide: any = {};
  reviews: Array<Ireview> = [];
  p:number=1;
  itemsPerPage:number=3;
  totaltourguide:any;

  ngOnInit() {
    this.id = this.activateRoute.snapshot['params']['id'];

    this.tourguideApi.getTourGuideById(this.id).subscribe((data) => {
      this.tourguide = data;

      this.titleService.setTitle('Tour guide: ' + this.tourguide['name']);

    });

    this.tourguideApi
      .getTourGuideReviews()
      .subscribe((data) =>{
        (this.reviews = Object.values(data));
        this.totaltourguide= Object.values(data).length;

      });
  }
  scrollToBookingForm() {
    const headerHeight = 100;  // Adjust this value with your actual header height
    const bookingFormElement = document.getElementById('bookingFormSection');
    if (bookingFormElement) {
      const offsetPosition = bookingFormElement.offsetTop - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}
