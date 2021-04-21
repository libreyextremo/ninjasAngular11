import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  ninja: any = '';

  classes = {blue: true, red: false, underline: true};
  test = true;
  userName = 'Andy';

  constructor(private activatedroute: ActivatedRoute) {
    this.ninja = activatedroute.snapshot.paramMap.get('ninja');
  }

  ngOnInit(): void {
  }

}
