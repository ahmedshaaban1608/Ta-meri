import { Component, OnInit } from '@angular/core';
import { ToursitDetailsService } from '../tourguides/service/toursit-details.service';
import { TourGuide } from '../interface/tour-guide';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toursit-details',
  templateUrl: './toursit-details.component.html',
  styleUrls: ['./toursit-details.component.css']
})
export class ToursitDetailsComponent implements OnInit {
  tourGuide: TourGuide | null = null;

  constructor(
    private route: ActivatedRoute,
    private touristDetailsService: ToursitDetailsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.touristDetailsService.getTourGuide(id).subscribe((tourGuide: TourGuide) => {
        this.tourGuide = tourGuide;
      });
    }
  }
}