import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguidesComponent } from './feature/tourguides/tourguides.component'; 

const routes: Routes = [
  { path: 'tourguides', component: TourguidesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
