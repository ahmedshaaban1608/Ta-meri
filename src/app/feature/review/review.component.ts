import { Component, Input } from '@angular/core';
import { Ireview } from '../interface/ireview';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  // @Input() review!: Ireview;
  @Input() reviews!: any; 
}