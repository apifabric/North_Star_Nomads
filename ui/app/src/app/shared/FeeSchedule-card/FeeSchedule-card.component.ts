import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FeeSchedule-card.component.html',
  styleUrls: ['./FeeSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FeeSchedule-card]': 'true'
  }
})

export class FeeScheduleCardComponent {


}