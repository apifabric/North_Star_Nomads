import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HaulingJob-new',
  templateUrl: './HaulingJob-new.component.html',
  styleUrls: ['./HaulingJob-new.component.scss']
})
export class HaulingJobNewComponent {
  @ViewChild("HaulingJobForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}