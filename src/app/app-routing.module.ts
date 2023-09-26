import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
