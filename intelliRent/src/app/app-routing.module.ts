import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InstantMessageComponent } from './pages/instant-message/instant-message.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './components/login/login.component';


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
  {path: 'profile', component: ProfileComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
