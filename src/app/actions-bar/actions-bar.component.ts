import { Component } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.css']
})
export class ActionsBarComponent {
  currentStyles: Record<string, string> = {'margin-right': '300px'};
}
