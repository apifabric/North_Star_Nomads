import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Trailer-card.component.html',
  styleUrls: ['./Trailer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Trailer-card]': 'true'
  }
})

export class TrailerCardComponent {


}