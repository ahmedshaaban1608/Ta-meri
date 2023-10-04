import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent {
  constructor(private rating: NgbRatingConfig, private router: Router) {
    this.rating.max = 5;
  }

  @Input() hotel!: any;
  moreDetails(id: number) {
    this.router.navigate(['hotel', id]);
  }
}
