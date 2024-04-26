import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController, Platform } from '@ionic/angular';

import { GoogleMapServiceService } from 'src/app/services/google-map-service.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.page.html',
  styleUrls: ['./property-detail.page.scss'],
})
export class PropertyDetailPage implements OnInit {

  @ViewChild('map', { static: true }) mapElementRef: any;
  googleMaps: any;
  center = {
    lat: 53.27270738156996,
    lng: -9.04878616333008,
  };
  map: any;


  nearestPlacesList = [
    {
      id: '1',
      place: 'Train Station',
      isExpandable: true,
      more: [
        {
          id: '1',
          name: 'Ceannt(Galway City) Station',
          time: '8 min | 2.5 km',
        },
        {
          id: '2',
          name: 'Train 2 Station',
          time: '14 min | 4.0 km',
        },
      ],
    },
    {
      id: '2',
      place: 'Airport',
      isExpandable: false,
      more: [
        {
          id: '1',
          name: 'Shannon Airport',
          time: '8 min | 2.5 km',
        },
      ],
    },
    {
      id: '3',
      place: 'Hospitals',
      isExpandable: false,
      more: [
        {
          id: '1',
          name: 'UCHG Hospital',
          time: '8 min | 2.5 km',
        },
        {
          id: '2',
          name: 'Merlin Park Hospital',
          time: '14 min | 4.0 km',
        },
        {
          id: '3',
          name: 'Bon Secours Hospital',
          time: '20 min | 6.0 km',
        },
      ],
    },
    {
      id: '4',
      place: 'Banks',
      isExpandable: false,
      more: [
        {
          id: '1',
          name: 'Bank of Ireland',
          time: '5 min | 1.5 km',
        },
      ],
    },
    {
      id: '5',
      place: 'Bus Station',
      isExpandable: false,
      more: [
        {
          id: '1',
          name: 'Galway Coach Station',
          time: '5 min | 1.5 km',
        },
      ],
    },
  ];

  propertyPhotosList = [
    {
      id: '1',
      photo: '../../../assets/images/rooms/bedroom-1.jpg',
    },
    {
      id: '2',
      photo: '../../../assets/images/rooms/bedroom-2.jpg',
    },
    {
      id: '3',
      photo: '../../../assets/images/rooms/kitchen.jpg',
    },
    {
      id: '4',
      photo: '../../../assets/images/rooms/bathroom-1.png',
    },
    {
      id: '5',
      photo: '../../../assets/images/rooms/bathroom-2.jpg',
    },
    {
      id: '6',
      photo: '../../../assets/images/rooms/parking.jpg',
    },
  ];

  amenitiesList = [
    {
      id: '1',
      amenities: 'Garden',
    },
    {
      id: '2',
      amenities: 'Home Gym',
    },
    {
      id: '3',
      amenities: 'Electric Showers',
    },
    {
      id: '4',
      amenities: 'Immersion',
    },
    {
      id: '5',
      amenities: 'Underfloor Heating',
    },
    {
      id: '6',
      amenities: 'amenity type',
    },
  ];
  scrollValue = 0;
  platform: any;
  isToastOpen = false;
  infavorite = false;



  constructor(private gmap: GoogleMapServiceService, private renderer: Renderer2, private router: Router, private plat: Platform, private navCtrl: NavController) { this.platform = plat;}

  ngOnInit() {
    this.loadMap()
  }

  ionViewWillEnter(): void {
    this.platform.is('ios') ? this.setStatusBarStyleLight() : null
  }

  setStatusBarStyleLight = async () => {
    await StatusBar.setStyle({ style: Style.Light });
  };

  async loadMap() {
    let googleMaps = await this.gmap.loadGoogleMap()
    this.googleMaps = googleMaps;
    const mapEl = this.mapElementRef.nativeElement;
    const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
    this.map = new googleMaps.Map(mapEl, {
      center: location,
      zoom: 12,
      disableDefaultUI: true
    })
    this.renderer.addClass(mapEl, 'visible');
    this.addmarkers()
  }

  addmarkers() {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/images/marker.png',
      scaledSize: new googleMaps.Size(28, 30),
    };
    const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: false,
    });
    marker.setMap(this.map);
  }

  handleScroll(ev: CustomEvent) {
    this.scrollValue = ev.detail.scrollTop;
  }

  goBack() {
    this.navCtrl.back()
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  goToImageFullView(image: any) {
    this.router.navigate(['/', 'image-fullview', `${image}`])
  }

}
