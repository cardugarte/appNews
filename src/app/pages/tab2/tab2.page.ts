import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Articule, categories } from 'src/app/interfaces/index.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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
        this.articules = [...articule ];
      });
  }

  segmentChanged(event: Event) {
    this.categorySelected = (event as CustomEvent).detail.value;
    this.newsService.getTopHeadlineByCategory(this.categorySelected)
      .subscribe(articule => {
        this.articules = articule;
      });
  }

  loadData() {
    this.newsService.getTopHeadlineByCategory(this.categorySelected, true)
      .subscribe(articule => {

        if( articule.length === this.articules.length) {
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articules = articule;
      })

      setTimeout(() => {
        this.infiniteScroll.complete();
      }, 1000);
  }

}

