import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';
import { LocalStorageService } from '@app/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value)
          .subscribe(token => {
            this.localStorageService.setItem('authToken', token.token);
            this.localStorageService.setItem('role', token.role);
            this.router.navigateByUrl('/');
          });
    }
  }

  private initForm() {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      passwordConfirm: ['']
    });
  }

}
