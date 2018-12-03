import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingThemePageComponent } from './creating-theme-page/creating-theme-page.component';
import { ThemesRoutingModule } from '@app/themes/themes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatingThemePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule {}
