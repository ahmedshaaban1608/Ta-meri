import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  searchResult: any = [];
  searchOption!: string;
  areas!: string[];
  languages !: string[];
  p:number = 1;
  itemsPerPage:number = 12;
  constructor(
    private fb: FormBuilder,
    private tourguideApi: TourguideApiService,
    
  ) {
    this.SearchForm = this.fb.group({
      name: [null, ],
      city: [''],
      language: [''],
    });
    this.areas = this.tourguideApi.areas;
    this.languages = this.tourguideApi.languages;
  }

  submitSearch() {
    this.SearchForm.markAllAsTouched();
    if (this.SearchForm.valid) {
      this.searchResult = [];

      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
      }, 2000);
      this.tourguideApi.getTourGuideBySearch(this.SearchForm.value).subscribe((data) => {
        this.searchResult = Object.values(data)[0];
        this.p = 1;
        console.log(this.searchResult);
        
        this.startSearch = true;
      },
      (error) => {
        
        this.startSearch = true;
      });
     
    }
  }
  
}
