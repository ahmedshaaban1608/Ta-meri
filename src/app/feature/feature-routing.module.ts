import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    path: 'hotel/:id',
    component: HotelDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
