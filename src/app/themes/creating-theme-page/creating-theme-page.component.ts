import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemesService } from '@app/core/services/themes.service';
import { Theme } from '@app/entities';

@Component({
  selector: 'app-creating-theme-page',
  templateUrl: './creating-theme-page.component.html',
  styleUrls: ['./creating-theme-page.component.scss']
})
export class CreatingThemePageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private themesService: ThemesService) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      'name': ['', [Validators.required,
                    Validators.minLength(4)]],
      'description': ['', [Validators.required,
                           Validators.minLength(20)]]
    });
  }

  submit() {
    const theme = this.formGroup.value as Theme;
    this.themesService.createTheme(theme)
      .subscribe();
  }
}
