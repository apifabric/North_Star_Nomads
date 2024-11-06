import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HAULERASSIGNMENT_MODULE_DECLARATIONS, HaulerAssignmentRoutingModule} from  './HaulerAssignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HaulerAssignmentRoutingModule
  ],
  declarations: HAULERASSIGNMENT_MODULE_DECLARATIONS,
  exports: HAULERASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HaulerAssignmentModule { }