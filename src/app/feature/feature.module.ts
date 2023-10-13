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

import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelGalleryComponent } from './hotel-gallery/hotel-gallery.component';

import { SharedModule } from '../shared/shared.module';


import { TourguideCardComponent } from './tourguide-card/tourguide-card.component';
import { TourguideEditComponent } from './tourguide-edit/tourguide-edit.component';
import { TourguideOwnPageComponent } from './tourguide-own-page/tourguide-own-page.component';
import { TourguideBookorderListComponent } from './tourguide-bookorder-list/tourguide-bookorder-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import{DataTablesModule}from'angular-datatables';
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

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbRatingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    DataTablesModule
  
  ],
})
export class FeatureModule {
 
}

