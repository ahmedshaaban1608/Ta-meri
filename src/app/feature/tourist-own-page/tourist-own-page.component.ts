import { Component } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { ActivatedRoute } from '@angular/router';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-tourist-own-page',
  templateUrl: './tourist-own-page.component.html',
  styleUrls: ['./tourist-own-page.component.css']
})
export class TouristOwnPageComponent {

  tourist: any = [];
  activeTab: string = 'details';

  constructor(private route: ActivatedRoute,
    private touristDetailsService: ToursitDetailsService,  private auth: AccountsApiService) {}

  ngOnInit() {
    const id = this.auth.getUser().id;
    if (id) {
      this.touristDetailsService.getDetailsById(+id).subscribe((tourist: any) => {
        console.log(tourist);
        
        this.tourist = tourist;
      });
    }
  }
  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
