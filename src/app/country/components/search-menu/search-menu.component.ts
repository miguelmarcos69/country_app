import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  imports: [],
  templateUrl: './search-menu.component.html',
})
export class SearchMenuComponent {
  value = output<string>();
  placeholder = input<string>('');

  debounceTime = input(300);
  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => clearInterval(timeout));
  });
}
