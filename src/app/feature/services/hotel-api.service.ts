import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class HotelApiService {
  constructor(private http: HttpClient) {}
  hotelUrl: string = `${environment.apiUrl}/tourists`;
  getAllHotels() {
    return this.http.get(this.hotelUrl);
  }

  getHotelById(id: number) {
    return this.http.get(`${this.hotelUrl}/${id}`);
  }
  getHotelBySearch(word: string) {
    return this.http.get(`${this.hotelUrl}?name=${word}`);
  }
}
