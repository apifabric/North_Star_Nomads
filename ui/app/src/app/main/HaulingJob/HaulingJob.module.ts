import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HAULINGJOB_MODULE_DECLARATIONS, HaulingJobRoutingModule} from  './HaulingJob-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HaulingJobRoutingModule
  ],
  declarations: HAULINGJOB_MODULE_DECLARATIONS,
  exports: HAULINGJOB_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HaulingJobModule { }