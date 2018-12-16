import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatingThemePageComponent } from '@app/themes/creating-theme-page/creating-theme-page.component';
import { AdminGuard } from '@app/core/admin-guard';

const routes: Routes = [
  {
    path: 'new',
    component: CreatingThemePageComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ThemesRoutingModule {
}