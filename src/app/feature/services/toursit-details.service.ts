// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import {TourGuide} from '../interface/tour-guide'
// @Injectable({
//   providedIn: 'root'
// })
// export class ToursitDetailsService {

//   private productsUrl = 'https://retoolapi.dev/Hew39q/data';
 
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
export class ToursitDetailsService {
 // private detailsProductsUrl = 'https://retoolapi.dev/Hew39q/data';
 // private profileProductsUrl = 'https://retoolapi.dev/DVtftj/data';
 private detailsProductsUrl = `${environment.apiUrl}/tourists`;
private profileProductsUrl = `${environment.apiUrl}/tourists`;


 constructor(private http: HttpClient) {}
 
 // Details API
 
 getDetailsProducts(): Observable<any> {
  return this.http.get<any[]>(this.detailsProductsUrl);
}

getDetailsProductById(id: number): Observable<any> {
  const productUrl = `${this.detailsProductsUrl}/${id}`;
  return this.http.get<any>(productUrl).pipe(
    map((product: any) => {
      console.log('Fetched details product:', product);
      return product;
    })
  );
}

getDetailsTourGuide(id: string): Observable<any> {
  const tourGuideUrl = `${this.detailsProductsUrl}/${id}`;
  return this.http.get<any>(tourGuideUrl);
}

updateDetailsTourGuide(id: string, data: any): Observable<any> {
  const tourGuideUrl = `${this.detailsProductsUrl}/${id}`;
  return this.http.put(tourGuideUrl, data);
}

 
 // Profile API
 //private profileProductsUrl = `${environment.apiUrl}/tourists`;
 
 
 getProfileProducts():  Observable<any>  {
   return this.http.get<TourGuide[]>(this.profileProductsUrl);
 }
 
 getProfileProductById(id: number): Observable<any>  {
   const productUrl = `${this.profileProductsUrl}/${id}`;
   return this.http.get<TourGuide>(productUrl).pipe(
     map((product: TourGuide) => {
       console.log('Fetched profile product:', product);
       return product;
     })
   );
 }
 
 getProfileTourGuide(id: string):  Observable<any>  {
   const tourGuideUrl = `${this.profileProductsUrl}/${id}`;
   return this.http.get<TourGuide>(tourGuideUrl);
 }
 
 updateProfileTourGuide(id: string, data: any): Observable<any> {
   const tourGuideUrl = `${this.profileProductsUrl}/${id}`;
   return this.http.put(tourGuideUrl, data);
 }}