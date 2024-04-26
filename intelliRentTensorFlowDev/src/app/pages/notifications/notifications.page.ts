import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationsList:any = [
    {
      id: '1',
      title: 'Listing approved!',
      description: 'Your listing has been approved and is now online..'
    },
    {
      id: '2',
      title: 'Listing rejected!',
      description: 'Your listing has been rejected. You need to do make some changes..'
    },
  ];
  tostMessage = ''
  isToastOpen = false;

  constructor(private changeDetector: ChangeDetectorRef, private tostCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }


  removeNotification(id: any, index: number) {
    this.tostMessage = this.notificationsList[index].title + 'dismissed';
    const copyList = this.notificationsList;
    const newList = copyList.filter((item:any) => item.id !== id);
    this.notificationsList = newList;
    this.isToastOpen = true;
    this.tostCtrl.getTop();
    this.changeDetector.detectChanges();
  }

  goBack() {
    this.navCtrl.back()
  }


}
