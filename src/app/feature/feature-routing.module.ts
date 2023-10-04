import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelApiService } from './services/hotel-api.service';
import { HotelGalleryComponent } from './hotel-gallery/hotel-gallery.component';
import { HotelOfferComponent } from './hotel-offer/hotel-offer.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Home',
  },
  {
    path: 'hotels',
    component: HotelsComponent,
    title: 'Hotels',
  },
  {
    path: 'tourguides',
    component: TourguidesComponent,
    title: 'Tour Guides',
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
    title: 'Contact us',
  },
  {
    path: 'about-us',
    component:AboutusComponent,

  },
  {
    path: 'hotel-gallery',
    component: HotelGalleryComponent,
  },
  
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent,
  },
  {
    path: 'hotel-review/:id',
    component: HotelReviewComponent,
  },
  {
    path: 'hotel-offer',
    component: HotelOfferComponent,
  },

  { path: 'tourguides/:id', component: TourguideProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
