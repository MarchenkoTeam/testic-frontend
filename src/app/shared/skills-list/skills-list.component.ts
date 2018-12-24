import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Skill } from '@app/entities';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Skill[];
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  form: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const skills = this.skills
      .map(skill => ({ name: skill.skill.name, value: skill.value }));
    this.form = this.fb.array([skills]);
    console.log(this.form.value);
  }

  onUpdate($event) {
    this.update.emit({ skill: $event.skill })
  }

  onDelete($event) {
    this.delete.emit({ skill: $event.skill })
  }

}
