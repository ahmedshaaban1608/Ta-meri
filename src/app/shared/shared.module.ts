import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CounterComponent } from './counter/counter.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    CarouselItemComponent,
    CarouselComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CounterComponent,
    HotelCardComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, RouterModule, NgbRatingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CounterComponent,
    HotelCardComponent,
    PaginationComponent
  ],
})
export class SharedModule {}
