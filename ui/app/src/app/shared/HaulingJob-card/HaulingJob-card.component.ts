import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HaulingJob-card.component.html',
  styleUrls: ['./HaulingJob-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HaulingJob-card]': 'true'
  }
})

export class HaulingJobCardComponent {


}