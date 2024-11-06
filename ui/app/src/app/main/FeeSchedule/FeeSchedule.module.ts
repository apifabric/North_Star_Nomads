import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FEESCHEDULE_MODULE_DECLARATIONS, FeeScheduleRoutingModule} from  './FeeSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FeeScheduleRoutingModule
  ],
  declarations: FEESCHEDULE_MODULE_DECLARATIONS,
  exports: FEESCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeeScheduleModule { }