import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthFacebookComponent } from './auth-callback/facebook/facebook.component';
import { AuthGoogleComponent } from './auth-callback/google/google.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AuthComponent,
    AuthGoogleComponent,
    AuthFacebookComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  providers: [
  ],
})
export class AuthModule {}
