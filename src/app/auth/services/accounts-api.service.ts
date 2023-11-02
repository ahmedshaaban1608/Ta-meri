import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {
 private user: any = {};
  constructor(private http: HttpClient){
   
  }
  
  getUser(): any  {
    const user = localStorage.getItem('user');
    if(user){
      this.user = JSON.parse(atob(user))
      
    } else{
      this.user = {}
    }
    return  this.user
  }
  isTourist(): boolean {
    return this.getUser().role === 'tourist';
  }

  isTourGuide(): boolean {
    return this.getUser().role ===  'tourguide';
  } 
  
  createTourist(data:any){
    return this.http.post(`${environment.apiUrl}/tourists`, data, { observe: 'response' });
  }

  login(data:any){
    return this.http.post(`${environment.apiUrl}/login`, data, { observe: 'response' });

  }
  logout(){
    const token = this.getUser().token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}/logout`, {headers, observe: 'response' });

  }
}