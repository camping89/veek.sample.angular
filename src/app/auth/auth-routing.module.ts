import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  AuthGoogleComponent,
  AuthFacebookComponent,
} from '@app/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ForgotPasswordComponent },
  { path: 'goolge-callback', component: AuthGoogleComponent },
  { path: 'facebook-callback', component: AuthFacebookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
