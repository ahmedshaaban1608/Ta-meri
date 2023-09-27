import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../shared/carousel/carousel.component';


@NgModule({
  declarations: [
    HomepageComponent,
    TourguidesComponent,
    HotelsComponent,
    ContactusComponent,
    NotFoundComponent,

    
    HotelDetailsComponent,

    TourguideProfileComponent,
    CarouselComponent,

    // CarouselComponent,

  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
