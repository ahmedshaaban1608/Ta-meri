import { Component } from '@angular/core';

@Component({
  selector: 'app-tourguide-profile',
  templateUrl: './tourguide-profile.component.html',
  styleUrls: ['./tourguide-profile.component.css'],
})
export class TourguideProfileComponent {
  showMore: boolean = false;
  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
  areas: string[] = ['cairo', 'Giza', 'Hurghada', 'Sharm El-Shaikh'];
  tourguide: any = {
    name: 'Ahmed Shaaban',
    profile:
      'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    bio: 'Expert tour guide',
    description: `<p>Hello Dear Traveler, My name is Wael , Im Egyptologist tours guide, an expert in all colors of tours around Egypt, supported with 15 years of experience (since 2005) , I do all tours not only in Cairo, to Giza, Alexandria, Saqqara, fayoum & Siwa oasis's Luxor and Aswan , I can arrange privet custmized tours for your family, friends, small group a memorable tailored privet Trip as the professional tour operators company will do , booking with great compatible fair prices , as a local Egyptian certificated Tour Guide capable on deliver any tourS to any city any where ,</p> <ul><li> Officially I Have ID certificates.</li><li>
a member guide of the Egyptian General Tourist Guides Syndicate.</li>
<li>a member guide of and the World Federation of Tour Guides Association and the Arab Tourist Guides Union.</li></ul></p>`,
    areas: ['cairo', 'Giza', 'Hurghada', 'Sharm El-Shaikh'],
    background:
      'https://www.presidency.eg/media/93222/big_12015_01_24_06_31_30jpg.jpg',
    gallery: [
      'https://images.jacobinmag.com/wp-content/uploads/sites/3/2023/03/02130051/50930840093_412705306d_k.jpg',
      'https://cdn.mappr.co/wp-content/uploads/2023/06/cairo-aerial-view.jpg',
      'https://cdn.britannica.com/47/194547-050-52813FB0/aerial-view-Cairo-Egypt.jpg',
      'https://www.shandpartners.com/wp-content/uploads/2020/11/Egypt.jpg',
      'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/Summer-In-Egypt-Cover.jpg',
      'https://images.memphistours.com/large/a1941e50cb262271d6f737449e4d8233.jpg',
    ],
  };
}
