import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  newAddedPropertyNotification = 'false';
  propertyNewsNotification = 'false';
  showDialog = false;

  constructor(private router: Router, private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }

  logout() {
    this.popOverCtrl.dismiss();
    this.router.navigateByUrl('/auth/login');
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

}
