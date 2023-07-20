import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyService {

    public methodS$: Subject<any> = new Subject<any>();
    public methodE$: Subject<any> = new Subject<any>();
    private myMethodSubject = new Subject<any>();

    constructor() {}

    methodS(data1: any) {
        this.myMethodSubject.next(data1);
        console.log(data1);
    }

    methodE(data2: any) {
      this.myMethodSubject.next(data2);
      console.log(data2);
    }
}
