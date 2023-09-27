import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TourGuideRegisterComponent } from './tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './Hotel-register/tourist-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TourGuideRegisterComponent,
    TouristRegisterComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
