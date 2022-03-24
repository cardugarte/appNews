import { Component, Input } from '@angular/core';


import { Articule } from './../../interfaces/index.interface';

@Component({
  selector: 'app-articules',
  templateUrl: './articules.component.html',
  styleUrls: ['./articules.component.scss'],
})
export class ArticulesComponent {
  @Input() articules: Articule[] = [];


  constructor() { }

  ngOnInit() {}

}
