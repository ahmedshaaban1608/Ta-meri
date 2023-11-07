
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
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

private token = this.auth.getUser().token
headers = new HttpHeaders({
  'Authorization': `Bearer ${this.token}`,
  'Accept': 'application/json'
  
});
private myId = this.auth.getUser().id
  constructor(private http: HttpClient ,private auth: AccountsApiService) {}
  url = `${environment.apiUrl}/tourguides`;
  
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
    return this.http.post(`${environment.apiUrl}/tourguides/${this.myId}`, data, { headers: this.headers, observe: 'response' }).pipe(
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
}