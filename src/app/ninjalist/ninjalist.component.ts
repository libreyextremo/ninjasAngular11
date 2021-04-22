import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninjalist',
  templateUrl: './ninjalist.component.html',
  styleUrls: ['./ninjalist.component.scss']
})
export class NinjalistComponent implements OnInit {
  ninjawarriorlist = [
    {name: 'Ryu', belt: 'yellow'},
    {name: 'Ken', belt: 'orange'},
    {name: 'Shinobi', belt: 'black'}
  ];
  day = new Date(1981, 5, 3); // months starts from 0
  term: any;
  constructor() { }

  ngOnInit(): void {
  }

}
