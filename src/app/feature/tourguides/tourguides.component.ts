import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

import { TourguideApiService } from '../services/guides-api.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import Typed from 'typed.js';

@Component({
  selector: 'app-tourguides',
  templateUrl: './tourguides.component.html',
  styleUrls: ['./tourguides.component.css'],
})
export class TourguidesComponent implements OnInit, AfterViewInit {
  @ViewChildren('cardTextElements') cardTextElements!: QueryList<ElementRef>;

  guides:any = [];
  p:number=1;
  itemsPerPage:number=12;
  constructor(
    private guidesApiService: TourguideApiService,
    private router: Router,
    private ratingConfig: NgbRatingConfig
  ) {
    this.ratingConfig.max = 5;
  }

  ngOnInit(): void {
    this.guidesApiService.getAllTourguides().subscribe((data) => {
        
      this.guides = Object.values(data)[0];
  
      this.animateCardText();
   
      
    });
  }

  getTypedLines(tourGuide: TourGuide): string[] {
    return [tourGuide.description, 'langauge: ' + tourGuide.langauge];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animateCardText();
    }, 100);
  }

  animateCardText(): void {
    if (this.cardTextElements) {
      this.cardTextElements.forEach((element: ElementRef) => {
        element.nativeElement.classList.add('show-animation');
        const typedTextOptions = {
          strings: [
            'Description: ' +
              element.nativeElement.getAttribute('data-description'),
            'langauge: ' + element.nativeElement.getAttribute('data-langauge'),
          ],
          typeSpeed: 50,
          loop: false,
        };

        new Typed(element.nativeElement, typedTextOptions);
      });
    }
  }

  goToGuideDetails(id: number): void {
    this.router.navigate(['tourguides', id]);
  }
  // goToGuideProfile(id: number): void {
  //   this.router.navigate(['tourguide-edit', id]);
  // }
}
