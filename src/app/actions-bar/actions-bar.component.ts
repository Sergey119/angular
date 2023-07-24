import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.css']
})
export class ActionsBarComponent {
  @Input() currentStyles: Record<string, string> = {'margin-right': '300px'};
}
