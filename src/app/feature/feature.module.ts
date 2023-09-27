import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
<<<<<<< HEAD
import { TourGuideRegisterComponent } from './tour-guide-register/tour-guide-register.component';


=======
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
>>>>>>> 53049a31340c6e8935bbe741e27a2d3f157a0436

@NgModule({
  declarations: [
    HomepageComponent,
    TourguidesComponent,
    // HotelsComponent,
    ContactusComponent,
    NotFoundComponent,
<<<<<<< HEAD
    TourGuideRegisterComponent
=======
    HotelDetailsComponent,
    // CarouselComponent,
>>>>>>> 53049a31340c6e8935bbe741e27a2d3f157a0436
  ],
  imports: [CommonModule],
})
export class FeatureModule {}
