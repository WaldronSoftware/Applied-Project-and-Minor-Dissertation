import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//Components
import { SharedToolbarComponent } from '../shared-toolbar/shared-toolbar.component';



@NgModule({
  declarations: [SharedToolbarComponent],
  imports: [CommonModule, IonicModule],
  exports: [SharedToolbarComponent],
})
export class SharedModule { }
