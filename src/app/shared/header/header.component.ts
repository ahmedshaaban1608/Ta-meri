import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {


  constructor (public auth: AccountsApiService, private router: Router){}
  logout() {
    this.auth.logout().subscribe(
      (data: HttpResponse<any>) => {    
        // Check the status code
        if (data.status === 200) {  
          
          localStorage.removeItem('user');
      
          this.router.navigate(['/login']);
        } 
      },
      (error) => {
        console.log(error);
        
      }
    )
    
    }
}
