
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountsApiService } from 'src/app/auth/services/accounts-api.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TourguideApiService {
  tourguide: BehaviorSubject<any> = new BehaviorSubject<any>({});
 public areas: string[] = [
    "Cairo",
    "Giza",
    "Luxor",
    "Aswan",
    "Alexandria",
    "Sharm El Sheikh",
    "Hurghada",
    "Dahab",
    "Siwa Oasis",
    "Marsa Alam",
    "Abu Simbel",
    "El Minya",
    "Ismailia",
    "Port Said",
    "Taba",
  ];
 public languages: string[] =  [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Italian',
    'Portuguese',
    'Dutch',
    'Hindi',
    'Swedish',
    'Greek',
    'Turkish',
    'Vietnamese',
    'Bengali',
    'Farsi (Persian)',
];

private token!: string;
private headers!: HttpHeaders;
private myId!: number;
private url!: string;
  constructor(private http: HttpClient ,private auth: AccountsApiService) {
    const user  = this.auth.getUser()
    this.token = user.token;
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });
    this.myId = user.id;
    this.url = `${environment.apiUrl}/tourguides`;
  }
 
  
  getAllTourguides(): Observable<any> {
    return this.http.get(`${this.url}`); 
  }
  
  getTourGuideById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  
  getTourGuideBySearch(data: {}): Observable<any> {
    return this.http.post(`${this.url}/search`,data);
  }
  
  updateTourGuide(data: any): Observable<any> {
   
    return this.http.post(`${this.url}/${this.myId}`, data, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {
        
        this.tourguide.next(response.body);        
        return response.body;
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }
  StoreTourGuideArea(data: any): Observable<any> {

    return this.http.post(`${environment.apiUrl}/areas/`, data, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }

  StoreTourGuideLanguage(data: any): Observable<any> {

    return this.http.post(`${environment.apiUrl}/languages/`, data, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }

  DeleteTourGuideArea(id: number): Observable<any> {

    return this.http.delete(`${environment.apiUrl}/areas/${id}`, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }

  DeleteTourGuideLanguage(id: number): Observable<any> {

    return this.http.delete(`${environment.apiUrl}/languages/${id}`, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }

  AcceptTourGuideOrder(id: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/orders/${id}`,{"status":"accepted"}, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }   
  RejectTourGuideOrder(id: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/orders/${id}`,{"status":"rejected"}, { headers: this.headers, observe: 'response' }).pipe(
      map((response: any) => {        
        this.tourguide.next(response.body);        
        return this.tourguide['_value'];
      }),
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        return throwError(error);
      })
    );
  }
}