import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InspectorAssignment-card.component.html',
  styleUrls: ['./InspectorAssignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InspectorAssignment-card]': 'true'
  }
})

export class InspectorAssignmentCardComponent {


}