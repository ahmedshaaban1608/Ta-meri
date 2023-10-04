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
import { FeedbackComponent } from './feature/feedback/feedback.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Create Tourist account' },
  },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'tourguideregister',
    component: TourGuideRegisterComponent,
    data: { title: 'Create Tour guide account' },
  },
  {
    path: 'hotelregister',
    component: TouristRegisterComponent,
    data: { title: 'Create Hotel account' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 Page not found' },
  },
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
