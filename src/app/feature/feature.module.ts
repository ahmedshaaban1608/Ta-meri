import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbAlertModule, NgbDatepickerModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { HotelOfferComponent } from './hotel-offer/hotel-offer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelGalleryComponent } from './hotel-gallery/hotel-gallery.component';

import { SharedModule } from '../shared/shared.module';


import { TourguideCardComponent } from './tourguide-card/tourguide-card.component';
import { TourguideEditComponent } from './tourguide-edit/tourguide-edit.component';
import { TourguideOwnPageComponent } from './tourguide-own-page/tourguide-own-page.component';
import { TourguideBookorderListComponent } from './tourguide-bookorder-list/tourguide-bookorder-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToursitProfileComponent } from './toursit-profile/toursit-profile.component';
import { ToursitDetailsComponent } from './toursit-details/toursit-details.component';
import { TouristOwnPageComponent } from './tourist-own-page/tourist-own-page.component';
import { Home2Component } from './home2/home2.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    HomepageComponent,
    TourguidesComponent,
    HotelsComponent,
    ContactusComponent,
    NotFoundComponent,
    HotelDetailsComponent,
    TourguideProfileComponent,
    ReviewComponent,
    SearchComponent,
    HotelOfferComponent,
    FeedbackComponent,
    HotelReviewComponent,

    AboutusComponent,
    HotelGalleryComponent,

    TourguideCardComponent,
     TourguideEditComponent,
     TourguideOwnPageComponent,
     TourguideBookorderListComponent,
     BookingFormComponent,
     ToursitProfileComponent,
     ToursitDetailsComponent,
     TouristOwnPageComponent,
     Home2Component,
     MyprofileComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbRatingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgxPaginationModule,
    NgbAlertModule,
    
  ],
})
export class FeatureModule {
 
}

