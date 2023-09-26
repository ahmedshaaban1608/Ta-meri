import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiHotelService {
  constructor(private http: HttpClient) {}
  hotelUrl: string = `https://dummyjson.com/products/`;
  getAllHotels() {
    return this.http.get(this.hotelUrl);
  }

  getHotelById(id: number) {
    return this.http.get(`${this.hotelUrl}${id}`);
  }
}
