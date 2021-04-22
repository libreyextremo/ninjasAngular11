import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-ninjalist',
  templateUrl: './ninjalist.component.html',
  styleUrls: ['./ninjalist.component.scss']
})
export class NinjalistComponent implements OnInit {
  reply = '';
  ninjawarriorlist = [
    {name: 'Ryu', belt: 'yellow'},
    {name: 'Ken', belt: 'orange'},
    {name: 'Shinobi', belt: 'black'}
  ];
  day = new Date(1981, 5, 3); // months starts from 0
  term: any;
  value: any;
  object: any;
  constructor(private logger: LoggingService) { }

  ngOnInit(): void {
    console.log(this.logger.cars);
    this.value = this.logger.monthList();
    this.object = this.logger.obj;
  }

  logIt(): void {
    this.reply = this.logger.log();
  }


}
