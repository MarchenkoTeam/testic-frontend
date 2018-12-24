import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '@app/entities/auth';
import { Observable } from 'rxjs';
import { Token } from '@app/entities/token';
import { RegistrationForm } from '@app/entities/registration-form';
import { LocalStorageService } from '@app/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders;

  constructor(private localStorageService: LocalStorageService,
              private http: HttpClient) {
    this.headers = new HttpHeaders({
      authToken: this.localStorageService.getToken()
    });
  }

  authorize(auth: Auth): Observable<Token> {
    return this.http.post<Token>('/auth/login', auth);
  }

  register(registrationForm: RegistrationForm): Observable<Token> {
    return this.http.post<Token>('/auth/sign_up', registrationForm);
  }

  me(): Observable<Any> {
    return this.http.get<Any>('/auth/me', { headers: this.headers })
  }
}
