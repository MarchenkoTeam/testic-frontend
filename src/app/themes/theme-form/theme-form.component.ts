import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() buttonName: string;
  @Input() formName: string;
  @Output() submit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit();
  }
}
