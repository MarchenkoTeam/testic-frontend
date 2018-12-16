import { Injectable } from '@angular/core';
import { Theme } from '@app/entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@app/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  headers: HttpHeaders;

  constructor(private localStorageService: LocalStorageService,
              private http: HttpClient) {
    this.headers = new HttpHeaders({
      authToken: this.localStorageService.getToken()
    });
  }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('/themes');
  }

  getTheme(id: number): Observable<Theme> {
    return this.http.get<Theme>(`/themes/${id}`);
  }

  createTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>('/themes', theme, { headers: this.headers });
  }

  updateTheme(theme: Theme): Observable<Theme> {
    return this.http.put<Theme>(`/themes/${theme.id}`, theme, { headers: this.headers });
  }
}
