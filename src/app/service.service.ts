import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyService {

    methodS$: Observable<any>;
    methodE$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.methodS$ = this.myMethodSubject.asObservable();
        this.methodE$ = this.myMethodSubject.asObservable();
    }

    methodS(data1: any) {
        this.myMethodSubject.next(data1);
        console.log(data1);
    }

    methodE(data2: any) {
      this.myMethodSubject.next(data2);
      console.log(data2);
    }
}
