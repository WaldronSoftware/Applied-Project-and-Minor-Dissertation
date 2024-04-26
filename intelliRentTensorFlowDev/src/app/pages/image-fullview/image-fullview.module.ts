import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageFullviewPageRoutingModule } from './image-fullview-routing.module';

import { ImageFullviewPage } from './image-fullview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageFullviewPageRoutingModule
  ],
  declarations: [ImageFullviewPage]
})
export class ImageFullviewPageModule {}
