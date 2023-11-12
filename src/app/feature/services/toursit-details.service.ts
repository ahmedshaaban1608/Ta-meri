import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourGuide } from '../interface/tour-guide';
import { environment } from 'src/environments/environment';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ToursitDetailsService {
  tourist: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private token!: string;
  private headers!: HttpHeaders;
  private myId!: number;
  private touristUrl!: string;


 constructor(private http: HttpClient, private auth: AccountsApiService) {
  const user  = this.auth.getUser()
  this.token = user.token;
  this.headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Accept': 'application/json'
  });
  this.myId = user.id;
  this.touristUrl = `${environment.apiUrl}/tourists`;
 }
 getDetailsById(id: number): Observable<any> {
  return this.http.get<any>(this.touristUrl + `/${id}`, { headers: this.headers }).pipe(
    map((tourist: any) => {
      
      this.tourist.next(tourist); // Update the BehaviorSubject with the retrieved data
      return this.tourist['_value'];
    }),
    catchError((error: any) => {
      console.error('Error fetching tourist details:', error);
      return throwError(error);
    })
  );
}




addTourguideReview(data:any){

  return this.http.post(`${environment.apiUrl}/reviews`, data,  {headers: this.headers, observe: 'response' });
}
bookTourguide(data:any){
  return this.http.post(`${environment.apiUrl}/orders`, data,  {headers: this.headers, observe: 'response' });
}

updateProfile(data: any): Observable<any> {

  console.log(this.headers);
  
  return this.http.post(`${environment.apiUrl}/tourists/${this.myId}`, data, { headers: this.headers, observe: 'response' }).pipe(
    map((response: any) => {          
      this.tourist.next(response.body);
      return this.tourist['_value'];
    }),
    catchError((error: any) => {
      console.error('Error updating profile:', error);
      return throwError(error);
    })
  );
}


 }