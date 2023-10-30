
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourGuide } from '../interface/tour-guide';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
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
  url = `${environment.apiUrl}/tourguides`;
  
  getTourGuideById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);

  }
  
  getTourGuideBySearch(word: string): Observable<any> {
    return this.http.get(`${this.url}?name=${word}`);
  }
  
  // getTourGuideReviews(): Observable<any> {
  //   const reviewUrl = `${environment.apiUrl}/tourguides`;
  // return this.http.get(reviewUrl);
  // }
  

  // getTourGuideDataFromLink(link: string): Observable<any> {
  //   return this.http.get(link);
  // }
}
