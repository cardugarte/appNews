import { Articule } from './../../interfaces/index.interface';
import { Component, Input } from '@angular/core';

import { Browser } from '@capacitor/browser';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


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
    console.log('favorite clicked');
  }

  cancelShareSheet() {
    console.log('cancel clicked');
  }





}
