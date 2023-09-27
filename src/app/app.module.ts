import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
<<<<<<< HEAD
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TourGuideRegisterComponent } from './auth/tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './auth/Hotel-register/tourist-register.component';



@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent, 
     FooterComponent,
     RegisterComponent,
     LoginComponent,
     TourGuideRegisterComponent,
     TouristRegisterComponent
     ],
=======
import { HotelsComponent } from './feature/hotels/hotels.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HotelDetailsComponent } from './feature/hotel-details/hotel-details.component';
import { SearchComponent } from './shared/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    CarouselComponent,
    HotelDetailsComponent,
    SearchComponent,
  ],
>>>>>>> 53049a31340c6e8935bbe741e27a2d3f157a0436
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
