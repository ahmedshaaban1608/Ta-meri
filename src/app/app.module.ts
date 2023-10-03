import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { FeatureModule } from './feature/feature.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
 //import { ScrollTopService } from './services/scroll-top.service';
 import { FeedbackApiService  } from '../app/feature/services/feedback-api.service';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FeatureModule,
    AuthModule,
    StaticModule,
  ],
   //providers: [ScrollTopService],
   bootstrap: [AppComponent],
})
export class AppModule {}
