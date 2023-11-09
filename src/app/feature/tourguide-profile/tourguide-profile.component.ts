
import { Component } from '@angular/core';
import { TourguideApiService } from '../services/guides-api.service';
import { Ireview } from '../interface/ireview';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router : Router
  ) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
    tourguide: any = {};
  p: number = 1;
  itemsPerPage: number = 3;

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.tourguideApi.getTourGuideById(this.id).subscribe(( data) => {
        this.tourguide =  data
        this.titleService.setTitle('Tour guide: ' + this.tourguide.name);
      },(error)=>{
        this.router.navigate(['/404']);

      });
    }
    // this.tourguideApi.getTourGuideReviews().subscribe((data) => {
    //   this.reviews = data as Array<Ireview>;
    //   this.totaltourguide = this.reviews.length;
    // });
  }
  scrollToTop(pageNumber: number) {
    this.p = pageNumber; // Update the current page number
  
    // Scroll to the top of the content container by targeting the anchor element
    const contentContainer = document.querySelector('.reviews');
    const anchorElement = document.querySelector('[name="contentTop"]');
    if (contentContainer && anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
