import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  favouriteData:any = [
    {
      id: '1',
      propertyImage: '../../../assets/images/property/house1/exterior.jpg',
      propertyName: 'Gort Na Coiribe',
      propertyAddress: 'Headford Rd, Galway',
      propertyAmount: '2900',
      isFavourit: false,
    },
  ];

  isToastOpen = false;
 
  constructor() { }

  ngOnInit() {
  }

  onDelete(id: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.favouriteData = this.favouriteData.filter((item: any) => item.id !== id);
    this.isToastOpen = true;
  }

}
