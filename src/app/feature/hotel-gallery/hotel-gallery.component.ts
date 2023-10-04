import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-gallery',
  templateUrl: './hotel-gallery.component.html',
  styleUrls: ['./hotel-gallery.component.css']
})
export class HotelGalleryComponent {
  changeImage(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    const originalSrc = target.getAttribute('data-original-src');
  
    const hoverImages: { [key: string]: string } = {
      'https://img.freepik.com/free-photo/swimming-pool_1203-3385.jpg': 'https://img.freepik.com/free-photo/hotel-nevada-usa_1268-14393.jpg',
      'https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg': 'https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg',
      'https://img.freepik.com/free-photo/hotel-nevada-usa_1268-14393.jpg': 'https://img.freepik.com/premium-photo/beautiful-hotel-with-swimming-pool-aqua-slides-evening-concept-tourism_361821-777.jpg',
      'https://img.freepik.com/premium-photo/beautiful-hotel-with-swimming-pool-aqua-slides-evening-concept-tourism_361821-777.jpg': 'https://img.freepik.com/premium-photo/modern-hotel-with-swimming-pool-with-yellow-umbrellas-blue-background-poolside-relax-summer-fun-building-architecture-holiday-vacation-villa-while-travel-leisure-time_250132-523.jpg',
      'https://img.freepik.com/premium-photo/modern-hotel-with-swimming-pool-with-yellow-umbrellas-blue-background-poolside-relax-summer-fun-building-architecture-holiday-vacation-villa-while-travel-leisure-time_250132-523.jpg': 'https://img.freepik.com/premium-photo/popular-resort-amara-dolce-vita-luxury-hotel_146671-19422.jpg',
      'https://img.freepik.com/premium-photo/popular-resort-amara-dolce-vita-luxury-hotel_146671-19422.jpg': 'https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18759.jpg',
      'https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18759.jpg': 'https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18752.jpg',
      'https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18752.jpg': 'https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg',
      'https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18726.jpg': 'https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg',
      'https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg': 'https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg'
    };
  
    if (originalSrc && originalSrc in hoverImages) {
      target.src = hoverImages[originalSrc];
    }
    window.onload = () => {
      const images = document.querySelectorAll('.img-fluid');
      images.forEach((image: Element) => {
        if (image instanceof HTMLImageElement) {
          if (image !== target) {
            const originalSrc = image.getAttribute('data-original-src');
            if (originalSrc && originalSrc in hoverImages) {
              image.src = hoverImages[originalSrc];
            }
          }
        }
      });
    };
  }
}