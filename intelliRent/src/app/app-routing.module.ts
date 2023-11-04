import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InstantMessageComponent } from './pages/instant-message/instant-message.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/home', // Redirect to the 'home' page
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'instant-message', component: InstantMessageComponent},
  { path: 'login', component: LoginComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
