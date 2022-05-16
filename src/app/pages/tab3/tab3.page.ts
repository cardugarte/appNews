import { Component } from '@angular/core';
import { Articule } from 'src/app/interfaces/index.interface';


import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  get articules(): Articule[] {
    return this.storage.getLocalArticules;
  }

  constructor(
    private storage: StorageService,
  ) {}

}
