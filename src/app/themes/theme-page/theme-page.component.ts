import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesService } from '@app/core/services/themes.service';
import { Theme } from '@app/enities';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss']
})
export class ThemePageComponent implements OnInit {

  theme: Theme;

  private themeId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private themesService: ThemesService) { }

  ngOnInit() {
    this.themeId = +this.route.snapshot.paramMap.get('id');
    this.themesService.getTheme(this.themeId)
      .subscribe(theme => this.theme = theme);
  }

  onStart() {
    this.router.navigateByUrl(`/themes/${this.themeId}/test`)
  }

}
