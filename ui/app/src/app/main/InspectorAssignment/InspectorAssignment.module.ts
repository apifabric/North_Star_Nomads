import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INSPECTORASSIGNMENT_MODULE_DECLARATIONS, InspectorAssignmentRoutingModule} from  './InspectorAssignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InspectorAssignmentRoutingModule
  ],
  declarations: INSPECTORASSIGNMENT_MODULE_DECLARATIONS,
  exports: INSPECTORASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InspectorAssignmentModule { }