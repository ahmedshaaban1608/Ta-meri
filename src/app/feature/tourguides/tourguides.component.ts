import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

import { GuidesApiService } from './service/guides-api.service';
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

  guides: TourGuide[] = [];

  constructor(
    private guidesApiService: GuidesApiService,
    private router: Router,
    private ratingConfig: NgbRatingConfig
  ) {
    this.ratingConfig.max = 5;
  }

  ngOnInit(): void {
    this.guidesApiService.getProducts().subscribe((data: TourGuide[]) => {
      console.log(data);
      this.guides = data;
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
}
