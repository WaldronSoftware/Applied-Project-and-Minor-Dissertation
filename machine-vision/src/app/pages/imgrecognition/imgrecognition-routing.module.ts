import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgrecognitionPage } from './imgrecognition.page';

const routes: Routes = [
  {
    path: '',
    component: ImgrecognitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgrecognitionPageRoutingModule {}
