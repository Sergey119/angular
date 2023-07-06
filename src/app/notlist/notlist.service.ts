import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeDataService {  //список уведомлений, data = 0 означает что уведомлений нет
  data = 0;

  constructor() {

  }
}
