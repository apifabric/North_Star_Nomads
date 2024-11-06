import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEREPORT_MODULE_DECLARATIONS, ServiceReportRoutingModule} from  './ServiceReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceReportRoutingModule
  ],
  declarations: SERVICEREPORT_MODULE_DECLARATIONS,
  exports: SERVICEREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceReportModule { }