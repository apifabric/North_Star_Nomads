import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HaulerAssignment-card.component.html',
  styleUrls: ['./HaulerAssignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HaulerAssignment-card]': 'true'
  }
})

export class HaulerAssignmentCardComponent {


}