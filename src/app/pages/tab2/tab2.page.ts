import { Component } from '@angular/core';
import { categories } from 'src/app/interfaces/index.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

  constructor() {}

  segmentChanged(event) {
    console.log(event)
  }

}
