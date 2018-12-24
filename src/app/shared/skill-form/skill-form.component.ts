import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Skill } from '@app/entities';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
  @Input() skill: Skill;
  @Input() url: string;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onUpdate() {
    this.update.emit({ skill: this.form.value });
  }

  onDelete() {
    this.delete.emit({ skill: this.form.value });
  }

  private initForm() {
    const skill = {
      name: this.skill.skill.name,
      value: this.skill.value
    };
    this.form = this.fb.group(skill);
  }
}
