import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/landing/landing.module#LandingModule'
  },
  {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'registration',
    loadChildren: 'app/registration/registration.module#RegistrationModule'
  },
  {
    path: 'themes',
    loadChildren: 'app/themes/themes.module#ThemesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
