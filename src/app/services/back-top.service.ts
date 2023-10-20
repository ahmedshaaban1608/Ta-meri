import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackTopService {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  constructor() {}
}
