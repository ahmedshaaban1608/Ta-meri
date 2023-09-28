import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguideProfileComponent } from './tourguide-profile/tourguide-profile.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    component: TourguideProfileComponent,
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
