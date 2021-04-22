import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MydataServiceService {
  configUrl = '../assets/ninjas.json';
  constructor(private http: HttpClient) { }

  fetchData(): any {
    return this.http.get(this.configUrl).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(err => of([]))
    );
  }

}
