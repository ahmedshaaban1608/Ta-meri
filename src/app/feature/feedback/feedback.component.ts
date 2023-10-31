import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourguideApiService } from '../services/guides-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() id!: number;
  usersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService:TourguideApiService,
    private route: ActivatedRoute
  ) {
    this.usersForm = this.formBuilder.group({
      rating: ['', [Validators.required]],
      title: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z\s]{0,}$/)],
      ],

      comment: ['', Validators.required],
    });
  }
  getUserFormData(data: any) {
    this.apiService
      .saveUsers({ ...data, account_id: this.id })
      .subscribe((result) => {
        console.warn(result);
      });
  }
}
