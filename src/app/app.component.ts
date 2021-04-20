import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninjasAngular11';
  name = 'Ninjas';

  /*
  sendEventHandler(message: string): void {
    alert(message);
  }

  sendNoParamEventHandler(): void {
    alert('Greetings');
  }
  */
}
