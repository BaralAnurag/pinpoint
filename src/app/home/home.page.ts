import { Component } from '@angular/core';
import { Address } from '../address';
import { MapsService } from '../maps.service';
import { MouseEvent } from '@agm/core';

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
  addresses: Address[] = [];

  constructor(private maps: MapsService) {}

  public async onMapClick(event: MouseEvent) {
    const place = event.placeId || event.coords;
    const address = await this.maps.geocode(place);
    this.addresses.push(address);
    this.selectedAddress = address;
  }
}
