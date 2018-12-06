import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginPageComponent } from './auth-login-page/auth-login-page.component';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthLoginPageComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
