
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TourguideApiService {
  constructor(private http: HttpClient) {}
  url = `${environment.apiUrl}/tourguides`;
  
  getAllTourguides(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
  getTourGuideById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  
  getTourGuideBySearch(word: string): Observable<any> {
    return this.http.get(`${this.url}?name=${word}`);
  }
  
  updateTourGuide(id: string, data: any): Observable<any> {
    const tourGuideUrl = `${this.url}/${id}`;
    return this.http.put(tourGuideUrl, data);
  }
  
  // FeedbackApiService
  private feedbackApiUrl = 'https://retoolapi.dev/IrJhOE/data';

  users() {
    return this.http.get(this.feedbackApiUrl);
  }

  saveUsers(data: any): Observable<any> {
    const modifiedData = {
      ...data,
      tourist_id: this.generateRandomId(),
    };
    return this.http.post(this.feedbackApiUrl, modifiedData);
  }

  private generateRandomId(): string {
    const characters = '123456789';
    let randomId = '';
    for (let i = 0; i < 4; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomId;
  }
}