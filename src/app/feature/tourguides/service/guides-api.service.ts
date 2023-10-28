// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import {TourGuide} from '../../interface/tour-guide'
// @Injectable({
//   providedIn: 'root'
// })
// export class GuidesApiService {
//   private productsUrl = 'https://mocki.io/v1/494ead96-9748-420b-9c2d-72c64e21b01a';

//   constructor(private http: HttpClient) {}

//   getProducts(): Observable<TourGuide[]> {
//     return this.http.get<TourGuide[]>(this.productsUrl);
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
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourGuide } from '../../interface/tour-guide';
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