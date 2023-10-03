import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TourGuide } from '../../interface/tour-guide';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private productsUrl = 'https://retoolapi.dev/vf8Hqb/data';
  // 'https://mocki.io/v1/5d0054aa-b65b-41f6-80ef-f0afcca7ee1d'
  constructor(private http: HttpClient) {}

  getProducts(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.productsUrl, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<TourGuide | null> {
    const productUrl = `${this.productsUrl}/${id}`;
    return this.http.get<TourGuide>(productUrl, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }).pipe(
      catchError(this.handleError),
      map((hotel: TourGuide) => {
        console.log('Fetched product:', hotel);
        return hotel;
      })
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }
}
