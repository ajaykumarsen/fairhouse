import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: 'acme fresh start housing',
      city: 'Chicago',
      state: 'IL',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'veer housing',
      city: 'California',
      state: 'California',
      availableUnits: 3,
      wifi: false,
      laundry: true,
    },
  ];

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
