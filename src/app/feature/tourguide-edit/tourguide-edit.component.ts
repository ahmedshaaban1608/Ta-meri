import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TourguideApiService } from '../services/guides-api.service';

@Component({
  selector: 'app-tourguide-edit',
  templateUrl: './tourguide-edit.component.html',
  styleUrls: ['./tourguide-edit.component.css']
})
export class TourguideEditComponent implements OnInit {
  tourguide: any = {
    name: '',
    description: '',
    thumbnail: '',
    price: '',
    areas: '',
    area:'',
    languages: '',
    langauge:'',
    startdate: '',
    enddate: ''
  };

  areas: string[] = ['Luxor', 'Alexandria', 'Aswan'];
  languages: string[] = ['German', 'English', 'Italian'];
  selectedAreas: string[] = [];
  selectedLanguages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private guidesApiService: TourguideApiService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.guidesApiService.getTourGuideById(+id).subscribe(
        (tourguide: any) => {
          this.tourguide = tourguide;
          this.selectedAreas = tourguide.areas || [];
          this.selectedLanguages = tourguide.languages || [];
        },
        (error: any) => {
          console.error('Failed to fetch tour guide details:', error);
        }
      );
    }
  }

  submitForm(tourguideForm: NgForm) {
    if (tourguideForm.invalid) {
      return;
    }

    const mergedData = { ...this.tourguide, ...tourguideForm.value };
    console.log(mergedData);

  
    mergedData.languages = this.selectedLanguages;

 
    const selectedAreas = this.selectedAreas;

   
    const localStorageKeyAreas = 'tourguide-areas';
    const localStorageKeyLanguages = 'tourguide-languages';

    
    this.updateLocalStorageArray(localStorageKeyLanguages, this.selectedLanguages);

    
    this.updateLocalStorageArray(localStorageKeyAreas, selectedAreas);

  
    localStorage.setItem(localStorageKeyAreas, JSON.stringify(selectedAreas));
    localStorage.setItem(localStorageKeyLanguages, JSON.stringify(this.selectedLanguages));

    this.guidesApiService.updateTourGuide(this.tourguide.id, mergedData).subscribe(
      (updatedTourguide: any) => {
        console.log('Tour guide updated successfully:', updatedTourguide);
      },
      (error: any) => {
        console.error('Failed to update tour guide:', error);
      }
    );
  }

  updateLocalStorageArray(key: string, values: string[]) {
    localStorage.setItem(key, JSON.stringify(values));
  }
}
