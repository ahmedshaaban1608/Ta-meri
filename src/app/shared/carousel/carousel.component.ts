import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    {
      title: 'Slide 1',
      description: 'Description for Slide 1',
      image: 'https://via.placeholder.com/800x400?text=Slide+1',
    },
    {
      title: 'Slide 2',
      description: 'Description for Slide 2',
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
    },
    {
      title: 'Slide 3',
      description: 'Description for Slide 3',
      image: 'https://via.placeholder.com/800x400?text=Slide+3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
