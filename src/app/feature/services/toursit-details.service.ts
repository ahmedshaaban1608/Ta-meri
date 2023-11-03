import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourGuide } from '../interface/tour-guide';
import { environment } from 'src/environments/environment.development';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';

@Injectable({
  providedIn: 'root'
})
export class ToursitDetailsService {
  private token = this.auth.getUser().token
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
 private touristUrl = `${environment.apiUrl}/tourists`;


 constructor(private http: HttpClient, private auth: AccountsApiService) {}
 
getDetailsById(id: number): Observable<any> {
  return this.http.get<any>(this.touristUrl+`/${id}`).pipe(
    map((tourist: any) => {
      return tourist;
    })
  );
}

addTourguideReview(data:any){

  return this.http.post(`${environment.apiUrl}/reviews`, data,  {headers: this.headers, observe: 'response' });
}

 }