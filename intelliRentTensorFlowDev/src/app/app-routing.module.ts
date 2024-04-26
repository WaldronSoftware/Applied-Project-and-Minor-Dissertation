import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'nav-bar',
    loadChildren: () => import('./pages/nav-bar/nav-bar.module').then( m => m.NavBarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/auth/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./pages/management/management.module').then( m => m.ManagementPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'user-listing',
    loadChildren: () => import('./pages/user-listing/user-listing.module').then( m => m.UserListingPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-use',
    loadChildren: () => import('./pages/terms-use/terms-use.module').then( m => m.TermsUsePageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'new-listing',
    loadChildren: () => import('./pages/new-listing/new-listing.module').then( m => m.NewListingPageModule)
  },
  {
    path: 'property-detail',
    loadChildren: () => import('./pages/property-detail/property-detail.module').then( m => m.PropertyDetailPageModule)
  },
  {
    path: 'image-fullview',
    loadChildren: () => import('./pages/image-fullview/image-fullview.module').then( m => m.ImageFullviewPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
