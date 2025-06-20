import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    console.log('emitiendo valor');

    

    return this.http.get<ResCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((data) => CountryMapper.MapResCountryItemToCountryArray(data)),
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error('No se puede obtener paises con ese query')
        );
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    console.log(query);

    query = query.toLowerCase();
    return this.http.get<ResCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((data) => CountryMapper.MapResCountryItemToCountryArray(data)),
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error('No se puede obtener paises con ese query')
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string) {
    console.log(code);
    return this.http.get<ResCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.MapResCountryItemToCountryArray(resp)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error('No se puede obtener paises con ese codigo' + code)
        );
      })
    );
  }
}
