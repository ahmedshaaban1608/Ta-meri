import { Component } from '@angular/core';
import { HotelApiService } from '../services/hotel-api.service';
import { TourguideApiService } from '../services/guides-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  tourguides: any =   [];
  facts = [
    {
      number: 5,
      text: 'Team Members',
      class: 'fas fa-users',
    },
    {
      number: 2154,
      text: 'Happy Clients',
      class: 'fas fa-users',
    },
    {
      number: 75,
      text: 'Hotels',
      class: 'fas fa-hotel',
    },
    {
      number: 30,
      text: 'Tour guides',
      class: 'fas fa-user-tie',
    },
  ];
  constructor(private guidesApiService: TourguideApiService) {}
  ngOnInit() {
    this.guidesApiService.getAllTourguides().subscribe((data) => {
        
      const dataArr:any = Object.values(data)[0];
      const sortedData = dataArr.sort((a:any,b:any)=> b?.reviews?.avg - a?.reviews?.avg)


      this.tourguides = sortedData
     
    });
  }

}
