import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { TourGuide } from '../interface/tour-guide';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-toursit-profile',
  templateUrl: './toursit-profile.component.html',
  styleUrls: ['./toursit-profile.component.css']
})
export class ToursitProfileComponent implements OnInit {
  @ViewChildren('cardTextElements') cardTextElements!: QueryList<ElementRef>;

  orders: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalTourGuid: any;

  constructor(private touristDetailsService: ToursitDetailsService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.touristDetailsService.getDetailsTourGuide(id).subscribe((tourGuide: any) => {
        console.log(tourGuide.orders)
        this.orders = (tourGuide.orders);
      });
    }

  }
  goToGuideDetails(id: number): void {
    this.router.navigate(['tourguides', id]);
  }}