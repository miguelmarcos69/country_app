import { Component, input } from '@angular/core';
import { ResCountry } from '../../interfaces/rest-countries.interfaces';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<Country[]>();
  errorMessage = input<string | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
