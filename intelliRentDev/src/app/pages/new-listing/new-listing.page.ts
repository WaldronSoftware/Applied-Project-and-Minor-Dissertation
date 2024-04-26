import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Platform, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker';
import { Observable, finalize } from 'rxjs';
import { Keyboard } from '@capacitor/keyboard';

interface PropertyListing {
  title: string;
  address: string;
  squareFootage: number;
  bathrooms: number;
  bedrooms: number;
  utilityRooms: number;
  price: number;
  type: string; // Sublet or Rent option
  imageUrl?: string;
  [key: string]: any;
}

type NumericKeys = 'squareFootage' | 'bathrooms' | 'bedrooms' | 'utilityRooms' | 'price';

// Ensure the key checked is one of the numeric keys.
function isNumericKey(key: any): key is NumericKeys {
  return ['squareFootage', 'bathrooms', 'bedrooms', 'utilityRooms', 'price'].includes(key);
}

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit, OnDestroy {
  private _listing: PropertyListing = {
    title: '',
    address: '',
    squareFootage: 0,
    bathrooms: 0,
    bedrooms: 0,
    utilityRooms: 0,
    price: 0,
    type: 'Sublet'
  };

 

  
  
  public get listing(): PropertyListing {
    const displayListing: any = { ...this._listing };
    Object.keys(displayListing).forEach((key: string) => {
      if (isNumericKey(key)) {
        // Always convert zero to an empty string for display purposes
        displayListing[key] = displayListing[key] === 0 ? '' : displayListing[key];
    }
    });
    return displayListing;
  }

  public set listing(value: PropertyListing) {
    this._listing = value;
  }

  keyboardShow: boolean = false;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    public platform: Platform,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private storage: AngularFireStorage
    
  ) {}


  ngOnInit() {
    this.addKeyboardListeners();
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners();
  }

  private addKeyboardListeners() {
    Keyboard.addListener('keyboardDidShow', info => {
      this.keyboardShow = true;
    });
    Keyboard.addListener('keyboardWillHide', () => {
      this.keyboardShow = false;
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  handleInputChange(key: string, value: any): void {
    const validKeys: Array<keyof PropertyListing> = ['title', 'address', 'squareFootage', 'bathrooms', 'bedrooms', 'utilityRooms', 'price', 'type'];
    if (validKeys.includes(key as keyof PropertyListing)) {
        if (isNumericKey(key as keyof PropertyListing)) {
            this._listing[key as keyof PropertyListing] = value === '' ? 0 : value;
        } else {
            this._listing[key as keyof PropertyListing] = value;
        }
    } else {
        console.error('Invalid key for PropertyListing:', key);
    }
}

  async addListing() {
    if (this._listing.title && this._listing.address && this._listing.price !== 0) {
      try {
        const saveListing: PropertyListing = {...this._listing};
        await this.firestore.collection('properties').add(saveListing);
        const toast = await this.toastCtrl.create({
          message: 'Listing added successfully.',
          duration: 2000,
          position: 'top'
        });
        toast.present();
        this.goBack();
      } catch (error: any) {
        const toast = await this.toastCtrl.create({
          message: 'Error adding listing: ' + error.message,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Please fill all required fields.',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  closeSheet() {
    this.modalCtrl.dismiss();
  }


  

}
