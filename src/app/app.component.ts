import { Component } from '@angular/core';
import { ScrollTopService } from './services/scroll-top.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ta-meri';
  constructor(private scrollService: ScrollTopService) {
    this.scrollService.setScrollTopOnRouteChange();
  }
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/jmfe5s9owpsfykouvtfugtmfuqornrwu.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
