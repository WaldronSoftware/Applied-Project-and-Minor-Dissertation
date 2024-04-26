import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.page.html',
  styleUrls: ['./user-listing.page.scss'],
})
export class UserListingPage implements OnInit {

  userListingPropertyList: any = [
    {
      id: '1',
      propertyImage: '',
      propertyName: 'Test Listing House',
      propertyAddress: 'House Street, Street',
      propertyAmount: '12345',
    },
    {
      id: '2',
      propertyImage: '',
      propertyName: 'Test Listing House 2',
      propertyAddress: 'Housey House, Street',
      propertyAmount: '54321',
    },
  ];
  showDialog = false;
  currentPropertyId: any;


  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

  deleteProperty() {
    this.userListingPropertyList = this.userListingPropertyList.filter((item: any) => item.id !== this.currentPropertyId)
    this.showDialog=false;
  }

}
