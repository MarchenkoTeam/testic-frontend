import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemesService } from '@app/core/services/themes.service';
import { Skill, Theme } from '@app/entities';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  theme: Theme;

  constructor(private route: ActivatedRoute,
              private themesService: ThemesService) { }

  ngOnInit() {
    const themeId = +this.route.snapshot.paramMap.get('id');
    this.themesService.getTheme(themeId)
      .subscribe(theme => this.theme = theme);
  }

  onUpdateSkill($event) {
    this.themesService.updateSkill(this.theme.id, $event.skill)
      .subscribe(theme => this.theme = theme);
  }

  onDeleteSkill($event) {
    this.themesService.deleteSkill(this.theme.id, $event.skill)
      .subscribe(theme => this.theme = theme);
  }

}
