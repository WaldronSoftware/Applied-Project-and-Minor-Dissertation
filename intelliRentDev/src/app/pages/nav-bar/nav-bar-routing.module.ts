import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavBarPage } from './nav-bar.page';

const routes: Routes = [
  {
    path: '',
    component: NavBarPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'management',
        loadChildren: () => import('../management/management.module').then(m => m.ManagementPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'favourite',
        loadChildren: () => import('../favourite/favourite.module').then(m => m.FavouritePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavBarPageRoutingModule {}
