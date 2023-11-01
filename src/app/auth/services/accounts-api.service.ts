import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(private http: HttpClient){}
  
  createTourist(data:any){
    return this.http.post(`${environment.apiUrl}/tourists`, data, { observe: 'response' });
  }
}