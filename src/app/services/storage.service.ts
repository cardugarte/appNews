import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Articule } from '../interfaces/index.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localArticules: Articule[] = [];

  constructor(
    private storage: Storage,
  ) {
    this.init();
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async saveAndRemoveArticule(articule: Articule) {
    const exists = this._localArticules.find(localArticule => localArticule.title === articule.title);

    if(exists) {
      this._localArticules = this._localArticules.filter(localArticule => localArticule.title !== articule.title);
    } else {
      this._localArticules = [ articule, ...this._localArticules];
    }

    this._storage.set('articules', this._localArticules);
  }




}
