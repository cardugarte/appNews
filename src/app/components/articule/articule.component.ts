import { Articule } from './../../interfaces/index.interface';
import { Component, Input } from '@angular/core';

import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.scss'],
})
export class ArticuleComponent {

  @Input() articule: Articule;


  constructor(
  ) {}

  onClick() {
    //
  }

  async openArticle() {
    await Browser.open({ url: this.articule.url });
}

}
