import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {REPAIRHISTORY_MODULE_DECLARATIONS, RepairHistoryRoutingModule} from  './RepairHistory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RepairHistoryRoutingModule
  ],
  declarations: REPAIRHISTORY_MODULE_DECLARATIONS,
  exports: REPAIRHISTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RepairHistoryModule { }