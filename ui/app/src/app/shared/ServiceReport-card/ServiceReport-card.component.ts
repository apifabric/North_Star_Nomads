import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceReport-card.component.html',
  styleUrls: ['./ServiceReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceReport-card]': 'true'
  }
})

export class ServiceReportCardComponent {


}