import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  name = 'John Smith';
  email = 'johnsmith@email.com';
  phone = '123456789';
  password = '123456789';
  isAndroid: any;

  constructor(private navCtrl: NavController, private plt: Platform, private modalCtrl: ModalController) {
    this.isAndroid = plt.is('android')
   }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

  closeSheet() {
    this.modalCtrl.dismiss()
  }

}
