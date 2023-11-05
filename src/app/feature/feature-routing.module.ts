import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { Home2Component } from './home2/home2.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { title: 'Home' },
  },
  
  {
    path: 'tourguides',
    component: TourguidesComponent,
    data: { title: 'Tour Guides' },
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
    data: { title: 'Contact us' },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { title: 'Search' },
  },
 

  
  { path: 'tourguides/:id', component: TourguideProfileComponent },
  {
    path: 'home',
    component: Home2Component,  
  },
  {
    path:'profile',
    component: MyprofileComponent,
    data: { title: 'My Profie' },
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
