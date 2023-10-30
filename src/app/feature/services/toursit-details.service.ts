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
 private touristUrl = `${environment.apiUrl}/tourists`;


 constructor(private http: HttpClient) {}
 
getDetailsById(id: number): Observable<any> {
  return this.http.get<any>(this.touristUrl+`/${id}`).pipe(
    map((tourist: any) => {
      return tourist;
    })
  );
}

 }