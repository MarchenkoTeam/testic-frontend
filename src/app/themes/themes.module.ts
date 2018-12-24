import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingThemePageComponent } from './creating-theme-page/creating-theme-page.component';
import { ThemesRoutingModule } from '@app/themes/themes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatingThemePageComponent } from './updating-theme-page/updating-theme-page.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ThemePageComponent } from './theme-page/theme-page.component';

@NgModule({
  declarations: [
    CreatingThemePageComponent,
    UpdatingThemePageComponent,
    ThemeFormComponent,
    ThemePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule {
}
