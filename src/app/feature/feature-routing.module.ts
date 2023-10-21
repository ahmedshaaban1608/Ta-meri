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
import { TourguideBookorderListComponent } from './tourguide-bookorder-list/tourguide-bookorder-list.component';import { TourguideOwnPageComponent } from './tourguide-own-page/tourguide-own-page.component';
import { ToursitProfileComponent } from './toursit-profile/toursit-profile.component';
import { ToursitDetailsComponent } from './toursit-details/toursit-details.component';
import { TouristOwnPageComponent } from './tourist-own-page/tourist-own-page.component';
import { Home2Component } from './home2/home2.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { title: 'Home' },
  },
  {
    path: 'hotels',
    component: HotelsComponent,
    data: { title: 'Hotels' },
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
 
 
  
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent,
  },
  {
    path: 'hotel-review/:id',
    component: HotelReviewComponent,
  },
  

  { path: 'tourguides/:id', component: TourguideProfileComponent },


  { path: 'tourguidebookorder', component: TourguideBookorderListComponent },

 {
    path: 'my-profile/:id',
    component: TourguideOwnPageComponent,
    data: { title: 'my profile' },
  },
  {
    path: 'my-toursit-profile/:id',
    component: TouristOwnPageComponent,
    data: { title: 'my toursit' },
  },
  {
    path: 'toursit-profile/:id',
    component: ToursitProfileComponent,
    data: { title: 'Tourist profile' },
  },
  {
    path: 'home',
    component: Home2Component,
   
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
