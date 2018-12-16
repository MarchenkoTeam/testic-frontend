import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemesService } from '@app/core/services/themes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creating-theme-page',
  templateUrl: './creating-theme-page.component.html',
  styleUrls: ['./creating-theme-page.component.scss']
})
export class CreatingThemePageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private themesService: ThemesService) {
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    this.themesService.createTheme(this.formGroup.value)
      .subscribe(theme => this.router.navigateByUrl(`/themes/${theme.id}`));
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      'name': [''],
      'description': ['']
    });
  }
}
