import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputConfig } from 'ng-otp-input';
import { NavController, Platform, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  showLoadingDialog = false;
  otpValue = '0';
  config: NgOtpInputConfig = {
    length: 4, allowNumbersOnly: true,
    inputStyles: {
      'height': '60px',
      'width': '60px',
      'border-radius': '10px',
      'color': 'var(--whiteColor)',
      'background': 'rgba(128,128,128,0.8)',
      'box-shadow': '0 3px 9px rgba(0,0,0,0.2)',
      'border-color': 'transparent',
      'font-size': '22px',
      'font-weight': '600'
    },
    inputClass: 'each_input',
    containerStyles: {
      'justify-content': 'space-between',
      'display': 'flex',
      'margin': '0 20px',
      'margin-top': '100px',
      'margin-bottom':'80px'
    }
  }

  constructor(public platform: Platform, public router: Router, private navCtrl: NavController,
    private popCtrl: PopoverController,
  ) { }

  ngOnInit() {
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  goBack() {
    this.navCtrl.back()
  }

  onContinue() {
    this.showLoadingDialog = true
    setTimeout(() => {
      this.showLoadingDialog = false;
      this.popCtrl.dismiss();
      this.router.navigateByUrl('home') //placeholder url
    }, 2000);
  }

  onChange(event: any) {
    this.otpValue = event;
    if (event.length === 4) {
      this.showLoadingDialog = true
      setTimeout(() => {
        this.showLoadingDialog = false;
        this.popCtrl.dismiss();
        this.router.navigateByUrl('home') //placeholder url change
      }, 2000);
    }
  }

}
