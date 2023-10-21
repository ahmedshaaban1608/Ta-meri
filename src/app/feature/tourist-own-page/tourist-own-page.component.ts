import { Component } from '@angular/core';

@Component({
  selector: 'app-tourist-own-page',
  templateUrl: './tourist-own-page.component.html',
  styleUrls: ['./tourist-own-page.component.css']
})
export class TouristOwnPageComponent {

  activeTab: string = 'details';

  constructor() {}

  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
