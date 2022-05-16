import { Component, Input } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';

//plugins:
import { Browser } from '@capacitor/browser';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { Articule } from './../../interfaces/index.interface';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.scss'],
})
export class ArticuleComponent {

  @Input() articule: Articule;


  constructor(
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private storageService: StorageService,
  ) {}

  onClick() {
    //
  }

  async openArticle() {
    await Browser.open({ url: this.articule.url });
  }

  async onOpenMenu() {

    const normalBtn: ActionSheetButton[] = [
      {
        text: 'favorito',
        icon: 'star-outline',
        handler: () => {
          this.onToggleFavorite();
        }
      },
      {
        text: 'cancelar',
        icon: 'close-circle-outline',
        handler: () => {
          this.cancelShareSheet();
        }
      }
    ]

    const shareBtn: ActionSheetButton = {
      text: 'compartir',
      icon: 'share-social-outline',
      handler: () => {
        this.onSharedClick();
      },
    }

    if(this.platform.is('capacitor')) {
      normalBtn.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: normalBtn,
    });

    await actionSheet.present();
  }


  onSharedClick() {
    const {title, source, image_url} = this.articule;
    this.socialSharing.share(
      title,
      source,
      null,
      image_url
    );
  }

  onToggleFavorite() {
    this.storageService.saveAndRemoveArticule(this.articule);
  }

  cancelShareSheet() {
    console.log('cancel clicked');
  }





}
