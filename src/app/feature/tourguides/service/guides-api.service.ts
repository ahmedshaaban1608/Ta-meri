import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TourGuide} from '../../interface/tour-guide'
@Injectable({
  providedIn: 'root'
})
export class GuidesApiService {
  private productsUrl = 'https://mocki.io/v1/494ead96-9748-420b-9c2d-72c64e21b01a';

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
}