import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceProvider-card.component.html',
  styleUrls: ['./ServiceProvider-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceProvider-card]': 'true'
  }
})

export class ServiceProviderCardComponent {


}