import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgrecognitionPageRoutingModule } from './imgrecognition-routing.module';

import { ImgrecognitionPage } from './imgrecognition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgrecognitionPageRoutingModule
  ],
  declarations: [ImgrecognitionPage]
})
export class ImgrecognitionPageModule {}
