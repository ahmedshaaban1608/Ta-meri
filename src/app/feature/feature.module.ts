import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tourguides', component: TourguidesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'readmore/:name', component: ReadmoreComponent },
  { path: 'hotel-details', component: HotelDetailsComponent },
  { path: 'tourguide-profile', component: TourguideProfileComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    HomepageComponent,
    TourguidesComponent,
    HotelsComponent,
    ContactusComponent,
    NotFoundComponent,
    ReadmoreComponent,
    HotelDetailsComponent,
    TourguideProfileComponent,
    CarouselComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbRatingModule,
    FormsModule,
  ],
})
export class FeatureModule {}
