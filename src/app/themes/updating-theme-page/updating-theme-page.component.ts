import { Component, OnInit } from '@angular/core';
import { ThemesService } from '@app/core/services/themes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updating-theme-page',
  templateUrl: './updating-theme-page.component.html',
  styleUrls: ['./updating-theme-page.component.scss']
})
export class UpdatingThemePageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private themesService: ThemesService) {
  }

  ngOnInit() {
    this.initForm();

    const id = +this.route.snapshot.paramMap.get('id');
    this.themesService.getTheme(id)
      .subscribe(theme => this.form.patchValue(theme));
  }

  submit() {
    this.themesService.updateTheme(this.form.value)
      .subscribe(theme => this.router.navigateByUrl(`/themes/${theme.id}`));
  }

  private initForm() {
    this.form = this.fb.group({
      id: [0],
      name: [''],
      description: ['']
    });
  }
}
