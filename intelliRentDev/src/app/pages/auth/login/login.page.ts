import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input-gg';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  separateDialCode = false;
  searchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Ireland, CountryISO.UnitedKingdom];
  }

  constructor(public platform: Platform, private router: Router) { }

  ngOnInit() {
  }

  goTo(screen: any)
  {
    this.router.navigateByUrl(screen);
  }

}
