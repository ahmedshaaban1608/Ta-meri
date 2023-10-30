import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-toursit-details',
  templateUrl: './toursit-details.component.html',
  styleUrls: ['./toursit-details.component.css']
})
export class ToursitDetailsComponent{
  @Input() tourist: any = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalOrders: any;

  constructor() {}

}
