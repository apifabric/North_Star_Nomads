import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RepairHistory-card.component.html',
  styleUrls: ['./RepairHistory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RepairHistory-card]': 'true'
  }
})

export class RepairHistoryCardComponent {


}