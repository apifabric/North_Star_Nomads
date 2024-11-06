import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Trailer-new',
  templateUrl: './Trailer-new.component.html',
  styleUrls: ['./Trailer-new.component.scss']
})
export class TrailerNewComponent {
  @ViewChild("TrailerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}