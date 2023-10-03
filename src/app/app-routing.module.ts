import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TourGuideRegisterComponent } from './auth/tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './auth/Hotel-register/tourist-register.component';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { StaticRoutingModule } from './static/static-routing.module';
import { NotFoundComponent } from './feature/not-found/not-found.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tourguideregister', component: TourGuideRegisterComponent },
  { path: 'hotelregister', component: TouristRegisterComponent },
  { path: '**', component: NotFoundComponent },
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
