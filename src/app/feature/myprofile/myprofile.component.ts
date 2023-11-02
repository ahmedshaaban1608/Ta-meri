import { Component } from '@angular/core';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
constructor(public auth: AccountsApiService){}

}
