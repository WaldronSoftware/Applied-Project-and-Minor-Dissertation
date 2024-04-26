import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageFullviewPage } from './image-fullview.page';

const routes: Routes = [
  {
    path: '',
    component: ImageFullviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageFullviewPageRoutingModule {}
