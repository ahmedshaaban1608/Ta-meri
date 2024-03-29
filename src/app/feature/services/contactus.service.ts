import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  contactUs(data:any){
    return this.http.post(`${environment.apiUrl}/contact`, data, { observe: 'response' });
  }
}
