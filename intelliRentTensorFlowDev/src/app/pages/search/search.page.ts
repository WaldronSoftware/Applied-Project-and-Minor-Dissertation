import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  recentSearches = ['Studio', '2 Bed Bunglow'];
  infavorit: any;
  isToastOpen: boolean = false;
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

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

}
