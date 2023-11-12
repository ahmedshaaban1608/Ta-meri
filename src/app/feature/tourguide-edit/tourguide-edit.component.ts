import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TourguideApiService } from '../services/guides-api.service';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from 'src/app/shared/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-tourguide-edit',
  templateUrl: './tourguide-edit.component.html',
  styleUrls: ['./tourguide-edit.component.css']
})
export class TourguideEditComponent{


  @Input() tourguide: any = []
  @Output() updated = new  EventEmitter()
  areas: string[] = [];
  languages: string[] = [];
  selectedAreas: string[] = [];
  selectedLanguages: string[] = [];
  updateForm: FormGroup;
  updateArea: FormGroup;
  updateLanguage: FormGroup;
  errors: string[] = [];
  areaError: string[] = []
  languageError: string[] = []
  profile_img!: File
  avatar !: File
  updateAlert = false;
  updateAreaAlert = false;
  updateLanguageAlert = false;

  constructor(
    private guidesApiService: TourguideApiService,
    private modalService: NgbModal
  ) {

  this.updateForm = new FormGroup({
    name: new FormControl(this.tourguide.name, [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/),
    ]),
 
    phone: new FormControl(this.tourguide.phone, [
      Validators.required,
      Validators.pattern(/^\+?\d{7,14}$/),

    ]),

    day_price: new FormControl(this.tourguide.day_price, [Validators.required, Validators.min(1),Validators.max(1000), Validators.pattern(/^\d{1,}$/)]),
    bio:  new FormControl(this.tourguide.bio, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    description:  new FormControl(this.tourguide.description, [
      Validators.required,
      Validators.minLength(100),
      Validators.maxLength(1000),
    ]),
  });
  this.updateArea = new FormGroup({
    area: new FormControl('', [
      Validators.required,
    ]),
  })
  this.updateLanguage = new FormGroup({
    language: new FormControl('', [
      Validators.required,
    ]),
  })
  }


  onProfileImgSelected(event: any) {
    this.profile_img = event.target.files[0];
    this.formData.append('profile_img', this.profile_img);
    }
    onAvatarSelected(event: any) {
      this.avatar = event.target.files[0];
      this.formData.append('avatar', this.avatar);
    }
 
    ngOnChanges(changes: SimpleChanges) {
    
      if (changes['tourguide'] && changes['tourguide'].currentValue) {
        this.updateForm.patchValue({
          name: this.tourguide.name,
          phone: this.tourguide.phone,
          day_price:this.tourguide.day_price,
          bio:this.tourguide.bio,
          description:this.tourguide.description,
        });

        this.areas = this.guidesApiService.areas.filter(area => !this.tourguide?.areas?.some((item:any) => item.area === area));
        this.updateArea.patchValue({
          area: ''
        })
        this.languages = this.guidesApiService.languages.filter(language => !this.tourguide?.languages?.some((item:any) => item.language === language));
        this.updateLanguage.patchValue({
          language: ''
        })
      }
    }
  formData = new FormData();
  updateSubmited() {
    this.updateAlert = false;
    this.errors = []
    this.updateForm.markAllAsTouched();
    if (this.updateForm.valid) {
      this.formData.append('name', this.updateForm.controls['name'].value);
      this.formData.append('phone', this.updateForm.controls['phone'].value);
      this.formData.append('day_price', this.updateForm.controls['day_price'].value);
      this.formData.append('bio', this.updateForm.controls['bio'].value);
      this.formData.append('description', this.updateForm.controls['description'].value);
      this.formData.append('_method', 'PUT');
      
      this.guidesApiService.updateTourGuide(this.formData).subscribe(
        (data) => {    
          this.updateAlert = true;
      this.updated.emit(data);  
     
      this.errors.push('Data is updated successfully'); 
        },
        (error) => {
          console.log(error);
          this.updateAlert = false;
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.errors.push(error[0]);
            });
          } else {
            
            
            this.errors.push('An error occurred while updating, please try again later.')
          }
        }
      );
  
  }
  }

  areaSubmited() {
this.updateAreaAlert = false;
this.areaError = []
this.updateArea.markAllAsTouched();
if (this.updateArea.valid) {
  this.guidesApiService.StoreTourGuideArea(this.updateArea.value).subscribe(
    (data) => {    
  this.updated.emit(data);  
  this.updateAreaAlert = true;
  this.areaError.push('Area is updated successfully');
    },
    (error) => {
      this.updateAreaAlert = false;
      if (error.status === 422) {
        const errors = Object.values(error.error.errors)
        errors.forEach((error:any) => {
          this.areaError.push(error[0]);
        });
      } else {
        this.areaError.push('An error occurred while updating, please try again later.')
      }
    });
  }

    }

  languageSubmited() {
    this.updateLanguageAlert = false;
    this.languageError = []
    this.updateLanguage.markAllAsTouched();
    if (this.updateLanguage.valid) {
      this.guidesApiService.StoreTourGuideLanguage(this.updateLanguage.value).subscribe(
        (data) => {    
      this.updated.emit(data);  
      this.updateLanguageAlert = true;
      this.languageError.push('Language is updated successfully');
        },
        (error) => {
          this.updateLanguageAlert = false;
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.languageError.push(error[0]);
            });
          } else {
            this.languageError.push('An error occurred while updating, please try again later.')
          }
        });
      }
      
    }

    onDeleteArea(id: number){
      this.updateAreaAlert = false;
this.areaError = [];
const modalRef = this.modalService.open(DeleteConfirmComponent);
modalRef.result.then(
  (result) => {
    if (result === 'confirm') {
      this.guidesApiService.DeleteTourGuideArea(id).subscribe(
        (data) => {    
      this.updated.emit(data);  
      this.updateAreaAlert = true;
      this.areaError.push('Area is Deleted');
        },
        (error) => {
          this.updateAreaAlert = false;
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.areaError.push(error[0]);
            });
          } else {
            this.areaError.push('An error occurred while Deleting, please try again later.')
          }
        });
    } else {
    }
  },
  (reason) => {}
);
     
    }

    onDeleteLanguage(id: number){
      this.updateLanguageAlert = false;
this.languageError = [];
const modalRef = this.modalService.open(DeleteConfirmComponent);
modalRef.result.then(
  (result) => {
    if (result === 'confirm') {
      this.guidesApiService.DeleteTourGuideLanguage(id).subscribe(
        (data) => {    
      this.updated.emit(data);  
      this.updateLanguageAlert = true;
      this.languageError.push('Language is Deleted');
        },
        (error) => {
          this.updateLanguageAlert = false;
          if (error.status === 422) {
            const errors = Object.values(error.error.errors)
            errors.forEach((error:any) => {
              this.languageError.push(error[0]);
            });
          } else {
            this.languageError.push('An error occurred while Deleting, please try again later.')
          }
        });
    } else {
    }
  },
  (reason) => {}
);
     
    }
  get name(): FormControl {
    return this.updateForm.get('name') as FormControl;
  }

  get phone(): FormControl {
    return this.updateForm.get('phone') as FormControl;
  }
  get day_price(): FormControl {
    return this.updateForm.get('day_price') as FormControl;
  }
  get bio(): FormControl {
    return this.updateForm.get('bio') as FormControl;
  }
  get description(): FormControl {
    return this.updateForm.get('description') as FormControl;
  }
  get area(): FormControl {
    return this.updateArea.get('area') as FormControl;
  }
  get language(): FormControl {
    return this.updateLanguage.get('language') as FormControl;
  }
}
