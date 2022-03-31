import { IonInfiniteScroll } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';


import { Articule } from 'src/app/interfaces/index.interface';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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


  loadData() {
    this.newsService.getTopHeadlineByCategory('general', true)
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
