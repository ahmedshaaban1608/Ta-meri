import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  email: string = 'info@ta-meri.com'
  email2: string = 'support@ta-meri.com'

  constructor (public auth: AccountsApiService, private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const element: HTMLElement | null = document.querySelector('.navbar-collapse');
        if (element && element.classList.contains('show')) {
          element.classList.remove('show');
        }
      }
    });
    
  }

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
