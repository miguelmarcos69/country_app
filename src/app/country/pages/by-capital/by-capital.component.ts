import { Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchMenuComponent } from '../../components/search-menu/search-menu.component';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-by-capital',
  imports: [CountryListComponent, SearchMenuComponent, CommonModule],
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  countyService = inject(CountryService);

  query = signal('');

  //TODO Observables
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countyService.searchByCapital(request.query);
    },
  });

  /* 
  
  //TODO con resource y promesas

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];

      return await firstValueFrom(
        this.countyService.searchByCapital(request.query)
      );
    },
  }); */

  /* 
  
  //TODO llamada con subscribe 
  
  isLoding = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    console.log(query);
    if (this.isLoding()) return;
    this.isLoding.set(true);
    this.isError.set(null);
    this.countyService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoding.set(false);
        this.countries.set(countries);
      },

      error: (err) => {
        this.isLoding.set(false);
        this.countries.set([]);
        this.isError.set(err);
      },
    });
  } */
}
