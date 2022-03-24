import { Articule } from './../../interfaces/index.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.scss'],
})
export class ArticuleComponent implements OnInit {

  @Input() articule: Articule;


  constructor() {
    console.log(this.articule);
  }

  ngOnInit() {}

}
