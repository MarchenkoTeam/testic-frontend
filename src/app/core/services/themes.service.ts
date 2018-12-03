import { Injectable } from '@angular/core';
import { Theme } from '@app/entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    authToken: 'secretKey'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('/themes');
  }

  createTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>('/themes', theme, httpOptions);
  }
}
