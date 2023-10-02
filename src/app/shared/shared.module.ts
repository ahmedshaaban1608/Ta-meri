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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    CarouselItemComponent,
    CarouselComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
  ],
})
export class SharedModule {}
