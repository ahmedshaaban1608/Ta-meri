import { Component } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  facts = [
    {
      number: 5,
      text: 'Team Members',
      class: 'fas fa-users',
    },
    {
      number: 2154,
      text: 'Happy Clients',
      class: 'fas fa-users',
    },
    {
      number: 75,
      text: 'Hotels',
      class: 'fas fa-hotel',
    },
    {
      number: 30,
      text: 'Tour guides',
      class: 'fas fa-user-tie',
    },
  ];

  constructor() {}
  ngOnInit() {
    const sharm = document.createElement('script');
    sharm.src = 'https://tp.media/content?currency=usd&trs=278542&shmarker=496016&type=compact&host=search.hotellook.com&locale=en&limit=4&powered_by=true&nobooking=&id=6674&categories=restaurant%2Cpets&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101';
    sharm.async = true;
    const sharmContainer = document.querySelector('.hotels-sharm');
    sharmContainer?.appendChild(sharm);
 

    // luxor
    const luxor = document.createElement('script');
    luxor.src = 'https://tp.media/content?currency=usd&trs=278542&shmarker=496016&type=compact&host=search.hotellook.com&locale=en&limit=4&powered_by=true&nobooking=&id=6668&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101';
    luxor.async = true;
    const luxorContainer = document.querySelector('.hotels-luxor');
    luxorContainer?.appendChild(luxor);
  }

}
