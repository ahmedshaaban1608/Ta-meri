import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelApiService {
  constructor(private http: HttpClient) {}
  hotelUrl: string = `https://retoolapi.dev/7BRp9X/hotels`;
  getAllHotels() {
    return this.http.get(this.hotelUrl);
  }

  getHotelById(id: number) {
    return this.http.get(`${this.hotelUrl}${id}`);
  }
}
