import { Component, OnInit, OnDestroy  } from '@angular/core';
import { MydataServiceService } from '../mydata-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.scss']
})
export class HttpserviceComponent implements OnInit, OnDestroy  {
  ninjawarriorlist: any;
  private subscription = new Subject();
  constructor(private newService: MydataServiceService) { }

  ngOnInit(): void {
    console.log('OnInit: started');
    console.log('Data' + this.newService.fetchData());

    this.subscription = this.newService.fetchData().subscribe(
      (data: any) => {
        this.ninjawarriorlist = data;
        console.log(data);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
