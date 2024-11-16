import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'registration',
    component: RegistrationComponent,
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
