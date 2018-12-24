import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingThemePageComponent } from './creating-theme-page/creating-theme-page.component';
import { ThemesRoutingModule } from '@app/themes/themes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatingThemePageComponent } from './updating-theme-page/updating-theme-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ThemePageComponent } from './theme-page/theme-page.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    CreatingThemePageComponent,
    UpdatingThemePageComponent,
    SkillsPageComponent,
    ThemeFormComponent,
    ThemePageComponent,
    TestPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule {
}
