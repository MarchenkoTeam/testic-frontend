import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginPageComponent } from '@app/auth/auth-login-page/auth-login-page.component';
import { GuestGuard } from '@app/core/guest-guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPageComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
