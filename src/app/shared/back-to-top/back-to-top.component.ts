import { Component, HostListener } from '@angular/core';
import { BackTopService } from 'src/app/services/back-top.service';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
})
export class BackToTopComponent {
  showButton: boolean = false;

  constructor(private backtop: BackTopService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showButton = window.scrollY > 500;
  }

  scrollToTop(): void {
    this.backtop.scrollToTop();
  }
}