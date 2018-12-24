import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillFormComponent } from './skill-form/skill-form.component';

@NgModule({
  declarations: [SkillsListComponent, SkillFormComponent],
  exports: [
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
