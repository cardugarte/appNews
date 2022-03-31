import { Articule } from './../../interfaces/index.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.scss'],
})
export class ArticuleComponent {

  @Input() articule: Articule;


  constructor() {}

}
