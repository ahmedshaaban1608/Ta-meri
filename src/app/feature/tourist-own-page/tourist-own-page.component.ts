import { ChangeDetectorRef, Component } from '@angular/core';
import { ToursitDetailsService } from '../services/toursit-details.service';
import { ActivatedRoute } from '@angular/router';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-tourist-own-page',
  templateUrl: './tourist-own-page.component.html',
  styleUrls: ['./tourist-own-page.component.css']
})
export class TouristOwnPageComponent {
  changeData(updatedData: any) {
    console.log(updatedData);
    
    // Handle the updated data received from the child component
    this.tourist = updatedData;
  }


  tourist!: any
  activeTab: string = 'order';


  constructor(private route: ActivatedRoute,
    private touristService: ToursitDetailsService,  private auth: AccountsApiService, cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const id = this.auth.getUser().id;
    if (id) {
      this.touristService.getDetailsById(+id).subscribe((tourist: any) => {     
        this.tourist = tourist;
        
      });
    }
  }
  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
