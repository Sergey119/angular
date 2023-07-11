// not-found.component отвечает
// за существование страницы
// при неопределенном маршруте
// (неизвестном URL-адресе).

import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

}
