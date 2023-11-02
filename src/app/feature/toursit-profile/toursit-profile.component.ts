import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-toursit-profile',
  templateUrl: './toursit-profile.component.html',
  styleUrls: ['./toursit-profile.component.css']
})
export class ToursitProfileComponent{
  @ViewChildren('cardTextElements') cardTextElements!: QueryList<ElementRef>;

  @Input() orders: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
 

  constructor(private router:Router) {}


  goToGuideDetails(id: number): void {
    this.router.navigate(['tourguides', id]);
  }}