import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import Typed from 'typed.js';
@Component({
  selector: 'app-tourguide-card',
  templateUrl: './tourguide-card.component.html',
  styleUrls: ['./tourguide-card.component.css'],
})
export class TourguideCardComponent {
  @Input() tourGuide: any;
  constructor(private ratingConfig: NgbRatingConfig, private router: Router) {
    this.ratingConfig.max = 5;
  }
  getTypedLines(tourGuide: any): string[] {
    return [tourGuide.description, 'langauge: ' + tourGuide.langauge];
  }
  goToGuideDetails(id: number): void {
    this.router.navigate(['tourguides', id]);
  }
  ngOnInit(){
    console.log(this.tourGuide);
    
  }
}
