import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  cars = [
    'Ford', 'Mustang', 'Toyota'
  ];

  obj = {
    id: '1',
    make: 'Toyota',
    model: 'Auris',
    license_plate: 'TO8080G'
  }

  months = [
    'January', 'February', 'March',  'April',  'May',  'June',  'July',  'August',
    'September', 'October', 'November', 'December'
  ];

  log(): string {
    console.log('I am the logging service.');
    return 'I am logged';
  }
  monthList(): any {
    return this.months;
  }

}
