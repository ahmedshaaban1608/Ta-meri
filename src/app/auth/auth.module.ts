import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TourGuideRegisterComponent } from './tour-guide-register/tour-guide-register.component';
import { TouristRegisterComponent } from './Hotel-register/tourist-register.component';
import { SharedModule } from '../shared/shared.module';
import { JoinAsComponent } from './join-as/join-as.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TourGuideRegisterComponent,
    TouristRegisterComponent,
    JoinAsComponent,
   
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, SharedModule, NgbAlertModule],
})
export class AuthModule {}
