import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { EmailService } from './email.service'; // Import the email service

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient  ) { }
  postEmploye(data : any){
    return this.http.post<any>("https://retoolapi.dev/Hg857F/data",data)
    .pipe((res:any)=>{
      this.saveDataToLocalStorage(res);
      return res;
    })
  }
  getEmployee(){
    return this.http.get<any>("https://retoolapi.dev/Hg857F/data")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("https://retoolapi.dev/Hg857F/data/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  saveDataToLocalStorage(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  } 


}
