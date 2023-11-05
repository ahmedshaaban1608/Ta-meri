import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelApiService } from '../services/hotel-api.service';
import { TourguideApiService } from '../services/guides-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  isSubmitting = false;
  startSearch = false;
  SearchForm!: FormGroup;
  searchResult: any[] = [];
  searchOption!: string;
  constructor(
    private fb: FormBuilder,
    private hotelApi: HotelApiService,
    private tourguideApi: TourguideApiService
  ) {
    this.SearchForm = this.fb.group({
      search: [null, [Validators.required, Validators.minLength(3)]],
      searchOption: ['tourguide', [Validators.required]],
    });
  }

  submitSearch() {
    if (!this.SearchForm.invalid) {
      this.searchResult = [];
      const searchText = this.SearchForm.controls['search']['value'];
      this.searchOption = this.SearchForm.controls['searchOption']['value'];

      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
      }, 2000);
      if (this.searchOption === 'hotel') {
        this.searchHotel(searchText);
      } else {
        this.searchTourGuide(searchText);
      }
    }
  }
  searchHotel(searchText: string) {
    this.hotelApi.getHotelBySearch(searchText).subscribe((data) => {
      this.searchResult = Object.values(data);
      this.startSearch = true;
    });
  }
  searchTourGuide(searchText: string) {
    this.tourguideApi.getTourGuideBySearch(searchText).subscribe((data) => {
      this.searchResult = Object.values(data);
      console.log(this.searchResult);

      this.startSearch = true;
    });
  }
}
