import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isToastOpen: boolean = false;
  infavorit: any;
  nearByPropertyList: any = 
  [
    {
      id: '1',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },
    {
      id: '2',
      propertyImage: '../../../assets/images/property/house2/exterior2.jpg',
      propertyName: 'Apt 13 Barr Taoide',
      propertyAddress: 'Forthill Street, Galway',
      propertyAmount: '1935',
      isFavourit: false,
    },
  ];

  featuredPropertyList: any = [

    {
      id: '1',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },
    {
      id: '2',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },
    {
      id: '3',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },
    {
      id: '4',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },

  ];

  constructor(private router: Router) {}

  goTo(screen: any)
  {
    this.router.navigateByUrl(screen);
  }

}
