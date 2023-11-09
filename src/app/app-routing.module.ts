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
import { JoinAsComponent } from './auth/join-as/join-as.component';
import { NotifyComponent } from './shared/notify/notify.component';
import { UnAuthGuard } from './guard/unauth.guard';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Create Tourist account' },
    canActivate:[UnAuthGuard]
  },
  { path: 'login', component: LoginComponent, data: { title: 'Login' },  canActivate:[UnAuthGuard] },
  {
    path: 'tourguideregister',
    component: TourGuideRegisterComponent,
    data: { title: 'Create Tour guide account' },
    canActivate:[UnAuthGuard]
  },
  {
    path: 'hotelregister',
    component: TouristRegisterComponent,
    data: { title: 'Create Hotel account' },
    canActivate:[UnAuthGuard]
  },

  {
    path: 'joinas',
    component: JoinAsComponent,
    canActivate:[UnAuthGuard]
   
  },
  {
    path: 'notification',
    component: NotifyComponent,
  
   
  },

  {
    path: '404',
    component: NotFoundComponent,
    data: { title: '404 Page not found' },
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
