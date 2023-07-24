import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({    // обеспечивает навигацию по сайту
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  favoriteColorControl = new FormControl('');
}
