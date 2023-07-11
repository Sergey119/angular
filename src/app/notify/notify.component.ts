import { Component } from '@angular/core';
import { SomeDataService } from '../notlist/notlist.service';

@Component({  // компонент отвечает за пользовательские уведомления
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
  toDisplay = true;
  shouldShow = true;

  constructor(private someSrv: SomeDataService) {
    console.log(someSrv.data)
    someSrv.data = 3
  }

  toggleData() {
	  this.toDisplay = !this.toDisplay;
  }
}

