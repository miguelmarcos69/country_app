import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent {
  //TODO Obtener datos desde el snapshoot
  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  // services
  countryServices = inject(CountryService);

  //TODO uso de resources

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      return this.countryServices.searchCountryByAlphaCode(request.code);
    },
  });
}
