import { Component, OnInit } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toursit-details',
  templateUrl: './toursit-details.component.html',
  styleUrls: ['./toursit-details.component.css']
})
export class ToursitDetailsComponent implements OnInit {
  tourGuide: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalTourGuid: any;

  constructor(
    private route: ActivatedRoute,
    private touristDetailsService: ToursitDetailsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.touristDetailsService.getDetailsTourGuide(id).subscribe((tourGuide: any) => {
        //console.log(tourGuide)
        this.tourGuide = tourGuide;
      });
    }
  }
}
