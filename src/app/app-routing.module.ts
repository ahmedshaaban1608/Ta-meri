import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { NotFoundComponent } from './feature/not-found/not-found.component';

const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FeatureRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
