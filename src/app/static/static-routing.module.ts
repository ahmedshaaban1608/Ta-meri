import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  {
    path: 'faqs',
    component: FAQsComponent,
    data: { title: 'Frequently asked questions' },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy' },
  },
  {
    path: 'terms-conditions',
    component: TermsOfUseComponent,
    data: { title: 'Terms and conditions' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
