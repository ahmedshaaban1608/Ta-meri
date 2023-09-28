import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourguideApiService {
  constructor(private http: HttpClient) {}
  getTourGuideByUsername() {
    return this.http.get(
      'https://mocki.io/v1/4785a696-bed8-4985-a05d-80904de2987b'
    );
  }
  getTourGuideReviews() {
    return this.http.get(
      'https://mocki.io/v1/248bc7a7-db65-4ba0-bfd0-223c7621e631'
    );
  }
}
