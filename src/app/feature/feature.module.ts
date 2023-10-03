import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
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
import { SharedModule } from '../shared/shared.module';

import { HotelReviewComponent } from './hotel-review/hotel-review.component';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbRatingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FeatureModule {}
