import { Component } from '@angular/core';

@Component({
  selector: 'app-join-as',
  templateUrl: './join-as.component.html',
  styleUrls: ['./join-as.component.css']
})
export class JoinAsComponent {
  accountType: string = '';

  getRouterLink() {
    if (this.accountType === 'client') {
      return '/register';
    } else if (this.accountType === 'freelancer') {
      return '/tourguideregister';
    } else if (this.accountType === 'hotels') {
      return '/hotelregister';
    }

    return '';
  }
}
