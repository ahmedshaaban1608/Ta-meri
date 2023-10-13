import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  carouselItems = [
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/img/slider1.png',
      mimg: '/assets/img/slider-m1.jpg',
      active: true,
    },
    {
      heading: 'ancient marvels and lively heritage',
      subHeading: 'The cradle of civilization',
      img: '/assets/img/slider2.png',
      mimg: '/assets/img/slider-m2.jpg',
      active: false,
    },
  ];

  constructor() {}
}
