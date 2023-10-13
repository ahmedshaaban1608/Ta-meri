import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackApiService {
  private apiUrl = 'https://retoolapi.dev/IrJhOE/data';

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.apiUrl);
  }

  saveUsers(data: any): Observable<any> {
    const modifiedData = {
      ...data,
      tourist_id: this.generateRandomId(),
    };
    return this.http.post(this.apiUrl, modifiedData);
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
