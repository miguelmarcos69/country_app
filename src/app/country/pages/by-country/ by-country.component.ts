import { Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchMenuComponent } from '../../components/search-menu/search-menu.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app--by-country',
  imports: [CountryListComponent, SearchMenuComponent],
  templateUrl: './ by-country.component.html',
})
export class ByCountryComponent {
  countyService = inject(CountryService);

  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countyService.searchByCountry(request.query);
    },
  });
}
