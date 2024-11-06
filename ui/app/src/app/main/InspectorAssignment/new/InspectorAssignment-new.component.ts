import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'InspectorAssignment-new',
  templateUrl: './InspectorAssignment-new.component.html',
  styleUrls: ['./InspectorAssignment-new.component.scss']
})
export class InspectorAssignmentNewComponent {
  @ViewChild("InspectorAssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}