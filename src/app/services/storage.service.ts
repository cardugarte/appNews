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

   get getLocalArticules() {
     return [...this._localArticules];
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
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

  async loadFavorites() {
    try {
      const articules = await this._storage.get('articules');
      this._localArticules = articules || [];
    } catch (error) {
      console.log('Error');
    }
  }




}
