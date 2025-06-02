import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  imports: [],
  templateUrl: './search-menu.component.html',
})
export class SearchMenuComponent {

  value= output<string >()
  placeholder= input<string>('')


  onSearch(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
