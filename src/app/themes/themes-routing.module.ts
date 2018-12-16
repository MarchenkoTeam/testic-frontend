import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatingThemePageComponent } from '@app/themes/creating-theme-page/creating-theme-page.component';
import { AdminGuard } from '@app/core/admin-guard';
import { UpdatingThemePageComponent } from '@app/themes/updating-theme-page/updating-theme-page.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreatingThemePageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: ':id/edit',
    component: UpdatingThemePageComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ThemesRoutingModule {
}
