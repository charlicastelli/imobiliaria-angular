import { Component, OnInit } from '@angular/core';
import { ImoveisService } from '../service/imoveis/imoveis.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public imoveis: any[] = [];

  readonly displayColumns = ['name', 'description', 'category', 'type'];

  constructor(private imoveisService: ImoveisService) {}

  ngOnInit(): void {
    this.searchForReastate();
  }

  async searchForReastate() {
    await this.imoveisService.search().then(async (retorno: any[]) => {
      this.imoveis = retorno;
    });
  }
}
