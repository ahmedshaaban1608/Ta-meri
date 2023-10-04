import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourguideApiService {
  constructor(private http: HttpClient) {}
  url = 'https://retoolapi.dev/nWW8oZ/tourguide';
  getTourGuideById(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  getTourGuideBySearch(word: string) {
    return this.http.get(this.url + '?name=' + word);
  }
  getTourGuideReviews() {
    return this.http.get(
      'https://mocki.io/v1/248bc7a7-db65-4ba0-bfd0-223c7621e631'
    );
  }
}
