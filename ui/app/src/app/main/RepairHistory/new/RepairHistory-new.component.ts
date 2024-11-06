import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RepairHistory-new',
  templateUrl: './RepairHistory-new.component.html',
  styleUrls: ['./RepairHistory-new.component.scss']
})
export class RepairHistoryNewComponent {
  @ViewChild("RepairHistoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}