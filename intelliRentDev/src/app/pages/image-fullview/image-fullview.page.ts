import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-fullview',
  templateUrl: './image-fullview.page.html',
  styleUrls: ['./image-fullview.page.scss'],
})
export class ImageFullviewPage implements OnInit {

  image: any;
  platform: any;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private plt: Platform) {
    this.platform = plt;
   }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('imageUrl')) {
        this.image = `${paramMap.get('imageUrl')}`
      }
    });
    this.platform.is('ios') ? this.setStatusBarStyleDark() : null
  }

  setStatusBarStyleDark = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
  };

  goBack() {
    this.navCtrl.back()
  }

}
