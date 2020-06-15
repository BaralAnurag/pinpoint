import { Component } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedAddress: Address = {
    addressLine1: '4 yawkey Way',
    city: 'Boston',
    state: 'MA',
    zipCode: '02215',
    latitude: '42.3466764',
    longitude: '-71.0994065'
  };

  constructor() {}

}
