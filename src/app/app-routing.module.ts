import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TourGuideRegisterComponent } from './auth/tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './auth/Hotel-register/tourist-register.component';

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'tourguideregister',
    component:TourGuideRegisterComponent
  },
  {
    path:'hotelregister',
    component:TouristRegisterComponent
  },


=======
import { HotelsComponent } from './feature/hotels/hotels.component';
import { HotelDetailsComponent } from './feature/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: 'hotel',
    component: HotelsComponent,
  },
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent,
  },
>>>>>>> 53049a31340c6e8935bbe741e27a2d3f157a0436
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
