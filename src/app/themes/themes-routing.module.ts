import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatingThemePageComponent } from '@app/themes/creating-theme-page/creating-theme-page.component';
import { AdminGuard } from '@app/core/admin-guard';
import { TestPageComponent } from '@app/themes/test-page/test-page.component';
import { SkillsPageComponent } from '@app/themes/skills-page/skills-page.component';
import { ThemePageComponent } from '@app/themes/theme-page/theme-page.component';
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
  },
  {
    path: ':id/skills',
    component: SkillsPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: ':id/test',
    component: TestPageComponent,
  }
  {
    path: ':id',
    component: ThemePageComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ThemesRoutingModule {
}
