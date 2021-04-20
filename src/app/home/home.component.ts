import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //@Input() ninja: any;

  // @Output() sendEvent: EventEmitter<string> = new EventEmitter();
  // @Output() sendNoParamEvent = new EventEmitter();

  homeTitle = 'Welcome to the ninja directory';

  ninja = {
    name: 'Yoshi',
    belt: 'Black'
  };

  constructor() { }

  ngOnInit(): void {
  }

  /*
  yell(): void {
    this.sendEvent.emit('Yahooo!');
  }
  greet(): void {
    this.sendNoParamEvent.emit();
  }
  */

}
