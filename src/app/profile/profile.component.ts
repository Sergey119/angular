// profile.component отвечает за существование
// элемента страницы с профилем пользователя

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() image: string = "assets/myimage.jpg";
  @Input() name: string = "Сорокин К.А.";
}