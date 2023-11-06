import { Component } from '@angular/core';
import { TourguideApiService } from '../services/guides-api.service';
import { Ireview } from '../interface/ireview';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-tourguide-own-page',
  templateUrl: './tourguide-own-page.component.html',
  styleUrls: ['./tourguide-own-page.component.css']
})
export class TourguideOwnPageComponent {
  id: any;
  p: number = 1;
  itemsPerPage: number = 4;
  constructor(
    private tourguideApi: TourguideApiService,
    private titleService: Title,
    private activateRoute: ActivatedRoute,
    private auth: AccountsApiService
  ) {}
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  tourguide: any = {};
  ngOnInit() {
    this.id = this.auth.getUser().id;
    if (this.id) {
      this.tourguideApi.getTourGuideById(this.id).subscribe(( data) => {
        this.tourguide =  data
        this.titleService.setTitle('Tour guide: ' + this.tourguide.name);
      });
    }
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
}
