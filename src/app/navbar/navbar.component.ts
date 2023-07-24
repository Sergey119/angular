// Компонент верхней панели
// без кнопки раскрывания
// боковой панели

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() currentStyles: Record<string, string> =
  {'margin-right': '600px', 'margin-left': '8px', 'margin-top': '6px'};
  @Input() pass: Record<string, string> = {'margin-right': '50px'};
}
