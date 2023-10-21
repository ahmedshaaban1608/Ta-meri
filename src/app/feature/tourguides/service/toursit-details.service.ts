import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TourGuide} from '../../interface/tour-guide'
@Injectable({
  providedIn: 'root'
})
export class ToursitDetailsService {

  private productsUrl = 'https://retoolapi.dev/Hew39q/data';
 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.productsUrl);
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