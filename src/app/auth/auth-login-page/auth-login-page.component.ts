import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';
import { LOCAL_STORAGE } from '@app/local-storage/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss']
})
export class AuthLoginPageComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              @Inject(LOCAL_STORAGE) private localStorage: any) {
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    this.authService.authorize(this.formGroup.value)
        .subscribe(token => {
            if (this.localStorage) {
              this.localStorage.setItem('authToken', token.token);
              this.localStorage.setItem('role', token.role);
              this.router.navigateByUrl('/');
            }
          },
          error => console.log(error));
  }

  private initForm() {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    });
  }
}
