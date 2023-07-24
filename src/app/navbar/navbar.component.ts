// Компонент верхней панели
// без кнопки раскрывания
// боковой панели

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //imagePath: string = "pic.jpg";
  @Input() image: string = "assets/myimage.jpg";
  @Input() currentStyles: Record<string, string> = {'margin-right': '600px'};
}
