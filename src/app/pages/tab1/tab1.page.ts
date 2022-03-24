import { Component, OnInit } from '@angular/core';


import { Articule } from 'src/app/interfaces/index.interface';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articules: Articule[] = [];

  constructor(
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
    this.newsService.getNewsTop()
    .subscribe( articules => {
      this.articules.push(...articules)
    });
  }

}
