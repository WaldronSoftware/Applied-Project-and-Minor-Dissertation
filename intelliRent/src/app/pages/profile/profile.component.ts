import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  isLoggedIn: boolean = false; //Set off auth status

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'login-modal-class', // Customize this in your global styles
    });
    return await modal.present();
  }

}
