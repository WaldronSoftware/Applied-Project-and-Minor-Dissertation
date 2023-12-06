import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  

  constructor(public modalController: ModalController, private authService: AuthService) {}

  onToolbarButtonClick() {
    if (!this.authService.isLoggedIn) {
      this.presentLoginModal();
    }
    // Handle other actions for logged-in users
  }

  async presentLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'login-modal-class',
    });
    return await modal.present();
  }

  ngOnInit() {
    
      
  }
}
