import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourguidesComponent } from './feature/tourguides/tourguides.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TourGuideRegisterComponent } from './auth/tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './auth/Hotel-register/tourist-register.component';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { StaticRoutingModule } from './static/static-routing.module';

const routes: Routes = [
  { path: 'tourguides', component: TourguidesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tourguideregister', component: TourGuideRegisterComponent },
  { path: 'hotelregister', component: TouristRegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FeatureRoutingModule,
    StaticRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}