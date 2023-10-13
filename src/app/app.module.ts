import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { ScrollTopService } from './services/scroll-top.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [AppComponent,],

  //  import { FeedbackApiService  } from '../app/feature/services/feedback-api.service';

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    FeatureModule,
    AuthModule,
    StaticModule,
    BrowserAnimationsModule,
   

  ],
  providers: [ScrollTopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
