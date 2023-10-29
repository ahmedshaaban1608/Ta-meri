// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class HotelApiService {
//   constructor(private http: HttpClient) {}
//   hotelUrl: string = `https://retoolapi.dev/7BRp9X/hotels`;
//   getAllHotels() {
//     return this.http.get(this.hotelUrl);
//   }

//   getHotelById(id: number) {
//     return this.http.get(`${this.hotelUrl}/${id}`);
//   }
//   getHotelBySearch(word: string) {
//     return this.http.get(`${this.hotelUrl}?name=${word}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TourGuide } from '../interface/tour-guide';

@Injectable({
  providedIn: 'root'
})
export class  HotelApiService {
  private detailsUrl = 'https://retoolapi.dev/iayI6T/data';
  private feedbackHotelUrl = 'https://retoolapi.dev/MXKNGO/data';
  private hotelUrl = 'https://retoolapi.dev/7BRp9X/hotels';
  private hotelOfferUrl = 'https://retoolapi.dev/fRGHxG/data';

  constructor(private http: HttpClient) {}

  // Details Service
  getDetails(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.detailsUrl, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  getDetailsById(id: number): Observable<TourGuide | null> {
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<TourGuide>(url, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }).pipe(
      catchError(this.handleError),
      map((product: TourGuide) => {
        console.log('Fetched product:', product);
        return product;
      })
    );
  }

  // Feedback Hotel Service
  getFeedbackHotels(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.feedbackHotelUrl);
  }

  getFeedbackHotelById(id: number): Observable<TourGuide | null> {
    const url = `${this.feedbackHotelUrl}/${id}`;
    return this.http.get<TourGuide>(url).pipe(
      map((product: TourGuide) => {
        console.log('Fetched product:', product);
        return product;
      })
    );
  }

  // Hotel API Service
  getAllHotels() {
    return this.http.get(this.hotelUrl);
  }

  getHotelById(id: number) {
    return this.http.get(`${this.hotelUrl}/${id}`);
  }

  getHotelBySearch(word: string) {
    return this.http.get(`${this.hotelUrl}?name=${word}`);
  }

  // Hotel Offer API Service
  getHotelOffers(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.hotelOfferUrl);
  }

  getHotelOfferById(id: number): Observable<TourGuide | null> {
    const url = `${this.hotelOfferUrl}/${id}`;
    return this.http.get<TourGuide>(url).pipe(
      map((product: TourGuide) => {
        console.log('Fetched product:', product);
        return product;
      })
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }
}