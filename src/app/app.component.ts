import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from './components/core/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme!: Observable<boolean>;
  check!: boolean;

  constructor(
    private themeService: ThemeService
    ) {}

  ngOnInit() {
    this.loadTheme();
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  buttonDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);

    //Alteração do tema
    document.body.classList.toggle('dark-theme');

    //Salvar tema no localStorage
    let theme = JSON.stringify(checked);
    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    let theme = localStorage.getItem('theme');

    if (theme === 'true') {
      let data = JSON.parse(theme!);
      this.buttonDarkTheme(data);
      this.check = data;
    }
  }
}
