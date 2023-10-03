import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../tourguides/service/details.service';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel!: any;
  constructor(
    private route: ActivatedRoute,
    private detailsApiService: DetailsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const hotrlId = params['id'];
      this.detailsApiService.getProductById(hotrlId).subscribe(
        (hotel) => {
          this.hotel = hotel;
          this.titleService.setTitle('Hotel: ' + this.hotel['title']);
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    });
  }
}
