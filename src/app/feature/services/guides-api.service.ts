// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { TourGuide } from '../interface/tour-guide';
// import { environment } from 'src/environments/environment.development';

// @Injectable({
//   providedIn: 'root'
// })
// // https://retoolapi.dev/DlmmEr/data
// export class GuidesApiService {
//   private productsUrl = `${environment.apiUrl}/tourguides`;

//   constructor(private http: HttpClient) {}

//   getProducts(): Observable<any> {
//     return this.http.get(this.productsUrl);
//   }

//   getProductById(id: number): Observable<TourGuide | null> {
//     const productUrl = `${this.productsUrl}/${id}`; 
//     return this.http.get<TourGuide>(productUrl).pipe(
//       map((product: TourGuide) => {
//         console.log('Fetched product:', product);
//         return product;
//       })
//     );
//   }

//   getTourGuide(id: string): Observable<TourGuide> {
//     const tourGuideUrl = `${this.productsUrl}/${id}`;
//     return this.http.get<TourGuide>(tourGuideUrl);
//   }

//   updateTourGuide(id: string, data: any): Observable<any> {
//     const tourGuideUrl = `${this.productsUrl}/${id}`;
//     return this.http.put(tourGuideUrl, data);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourGuide } from '../interface/tour-guide';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

// https://retoolapi.dev/DlmmEr/data
export class GuidesApiService {
  private productsUrl = `${environment.apiUrl}/tourguides`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
  }

  getProductById(id: number): Observable<TourGuide | null> {
    const productUrl = `${this.productsUrl}/${id}`;
    return this.http.get<TourGuide>(productUrl).pipe(
      map((product: TourGuide) => {
        console.log('Fetched product:', product);
        return product;
      })
    );
  }

  getTourGuide(id: string): Observable<TourGuide> {
    const tourGuideUrl = `${this.productsUrl}/${id}`;
    return this.http.get<TourGuide>(tourGuideUrl);
  }

  updateTourGuide(id: string, data: any): Observable<any> {
    const tourGuideUrl = `${this.productsUrl}/${id}`;
    return this.http.put(tourGuideUrl, data);
  }
}

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