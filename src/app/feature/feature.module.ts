import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { TourguidesComponent } from './tourguides/tourguides.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ReadmoreComponent } from './readmore/readmore.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tourguides/:name', component: TourguidesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'contactus', component: ContactusComponent },
  // { path: 'readmore/:name', component: ReadmoreComponent },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  declarations: [
    HomepageComponent,
    TourguidesComponent,
    HotelsComponent,
    ContactusComponent,
    NotFoundComponent,
    // ReadmoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbRatingModule
    
  ],
})
export class FeatureModule {}