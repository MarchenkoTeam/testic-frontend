import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@app/entities/auth';
import { Observable } from 'rxjs';
import { Token } from '@app/entities/token';
import { RegistrationForm } from '@app/entities/registration-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authorize(auth: Auth): Observable<Token> {
    return this.http.post<Token>('/auth/login', auth);
  }

  register(registrationForm: RegistrationForm): Observable<Token> {
    return this.http.post<Token>('/auth/sign_up', registrationForm);
  }
}
