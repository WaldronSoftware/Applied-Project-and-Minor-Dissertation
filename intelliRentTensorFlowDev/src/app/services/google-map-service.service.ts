import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GoogleMapServiceService {

  constructor() { }

  async loadGoogleMap() {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps)
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDldcETpyhyd6ByLyGZAqLTy2pO6e9q_GM' + environment.googleMapsApiKey + '&callback=Function.prototype';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const lodedGoogleModule = win.google;
        if (lodedGoogleModule && lodedGoogleModule.maps) {
          resolve(lodedGoogleModule.maps);
        }
        else {
          reject('Google Maps SDK Not Available')
        }
      }
    })
  }
}
