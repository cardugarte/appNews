import { Component, OnInit } from '@angular/core';
import { Articule, categories } from 'src/app/interfaces/index.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories: categories[] = [
    {
      name: 'general',
      key:  'general'
    },
    {
      name: 'ciencia',
      key:  'science'
    },
    {
      name: 'deportes',
      key:  'sports'
    },
    {
      name: 'negocios',
      key:  'business'
    },
    {
      name: 'salud',
      key:  'health'
    },
    {
      name: 'entretenimiento',
      key:  'entertainment'
    },
    {
      name: 'tecnología',
      key:  'tech'
    },
    {
      name: 'política',
      key:  'politics'
    },
    {
      name: 'comida',
      key:  'food'
    },
    {
      name: 'viajes',
      key:  'travel'
    },
  ]

  categorySelected: string = this.categories[0].key;
  articules: Articule[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlineByCategory(this.categorySelected)
      .subscribe(articule => {
        console.log(articule);
        this.articules = [...articule ];
      });
  }

  segmentChanged(event: any) {
    this.categorySelected = event.detail.value;
    console.log(event.detail.value);
    this.newsService.getTopHeadlineByCategory(this.categorySelected)
      .subscribe(articule => {
        console.log(articule);
        this.articules = articule;
      });
  }

}
