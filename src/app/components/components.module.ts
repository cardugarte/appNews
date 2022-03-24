import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { ArticuleComponent } from './articule/articule.component';
import { ArticulesComponent } from './articules/articules.component';



@NgModule({
  declarations: [
    ArticuleComponent,
    ArticulesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ArticulesComponent,
  ]
})
export class ComponentsModule { }
