import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'app-county-layout',
  imports: [RouterOutlet,TopMenuComponent],
  templateUrl: './countyLayout.component.html',
})
export class CountyLayoutComponent {}
