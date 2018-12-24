import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { ThemesService } from '@app/core/services/themes.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  form: FormGroup;
  test: Test;
  me: Any;
  private themeId: number;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private themesService: ThemesService) { }

  ngOnInit() {
    this.initForm();
    this.themeId = +this.route.snapshot.paramMap.get('id');
    this.themesService.getTest(this.themeId)
      .subscribe(test => {
        this.test = test;
        this.form.patchValue({ test: test.id })
      });
    this.authService.me()
      .subscribe(user => {
        this.me = user;
        this.form.patchValue({ user: user.id })
      });
  }

  onSubmit() {
    this.themesService.sendTest(this.themeId)
      .subscribe();
  }

  private initForm() {
    this.form = this.fb.group({
      id: 0,
      user: [0],
      test: [0],
      code: ['']
    });
  }
}
