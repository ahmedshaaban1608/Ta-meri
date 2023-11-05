
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TourguideApiService {
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
  constructor(private http: HttpClient) {}
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
  
  updateTourGuide(id: string, data: any): Observable<any> {
    const tourGuideUrl = `${this.url}/${id}`;
    return this.http.put(tourGuideUrl, data);
  }
  
  // FeedbackApiService
  // private feedbackApiUrl = 'https://retoolapi.dev/IrJhOE/data';

  // users() {
  //   return this.http.get(this.feedbackApiUrl);
  // }



}