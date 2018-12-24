import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '@app/local-storage/local-storage.service';
import { ThemesService } from '@app/core/services/themes.service';
import { Theme } from '@app/entities';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss']
})
export class ThemePageComponent implements OnInit {

  theme: Theme;
  isAdmin = false;

  private themeId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private localStorageService: LocalStorageService,
              private themesService: ThemesService) { }

  ngOnInit() {
    this.isAdmin = this.localStorageService.isAdmin;
    this.themeId = +this.route.snapshot.paramMap.get('id');
    this.themesService.getTheme(this.themeId)
      .subscribe(theme => this.theme = theme);
  }

  onStart() {
    this.router.navigateByUrl(`/themes/${this.themeId}/test`);
  }
}
