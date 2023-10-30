import { Component } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourist-own-page',
  templateUrl: './tourist-own-page.component.html',
  styleUrls: ['./tourist-own-page.component.css']
})
export class TouristOwnPageComponent {

  tourist: any = [];
  activeTab: string = 'details';

  constructor(private route: ActivatedRoute,
    private touristDetailsService: ToursitDetailsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.touristDetailsService.getDetailsById(+id).subscribe((tourist: any) => {
        this.tourist = tourist;
      });
    }
  }
  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
