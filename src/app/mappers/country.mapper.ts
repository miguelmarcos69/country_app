import { Country } from '../country/interfaces/country.interface';
import { ResCountry } from '../country/interfaces/rest-countries.interfaces';

export class CountryMapper {
  // restCountry => country
  //static RestCountry[] = country[]

  static MapRestCountryToCounty(item: ResCountry): Country {
    return {
      capital: Array.isArray(item.capital) ? item.capital.join(', ') : '',
      cca2: item.cca2,
      svg: item.flag,
      flagSVG: item.flags.svg,
      common: item.translations['spa'].common,
      population: item.population,
      region: item.region,
      subRegion: item.subregion,
    };
  }

  static MapResCountryItemToCountryArray(items: ResCountry[]): Country[] {
    return items.map((country) => this.MapRestCountryToCounty(country));
  }
}
