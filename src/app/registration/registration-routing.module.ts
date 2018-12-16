import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from '@app/registration/registration-page/registration-page.component';
import { GuestGuard } from '@app/core/guest-guard';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPageComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
