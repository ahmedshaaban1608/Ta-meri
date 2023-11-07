import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TourguideApiService } from '../services/guides-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tourguide-edit',
  templateUrl: './tourguide-edit.component.html',
  styleUrls: ['./tourguide-edit.component.css']
})
export class TourguideEditComponent{

  @Input() tourguide: any = []
  @Output() updated = new  EventEmitter()
  areas: string[] = ['Luxor', 'Alexandria', 'Aswan'];
  languages: string[] = ['German', 'English', 'Italian'];
  selectedAreas: string[] = [];
  selectedLanguages: string[] = [];
  updateForm: FormGroup;
  errors: string[] = [];
  profile_img!: File
  avatar !: File
  updateAlert = false;
  constructor(
    private guidesApiService: TourguideApiService
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
      this.updated.emit(data);  
      this.updateAlert = true;
      this.errors.push('Data is updated successfully');
        },
        (error) => {
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
}
