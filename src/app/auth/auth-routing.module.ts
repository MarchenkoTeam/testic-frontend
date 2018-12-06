import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginPageComponent } from '@app/auth/auth-login-page/auth-login-page.component';

const routes: Routes = [
  { path: '', component: AuthLoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}