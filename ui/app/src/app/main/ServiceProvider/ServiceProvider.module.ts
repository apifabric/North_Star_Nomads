import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEPROVIDER_MODULE_DECLARATIONS, ServiceProviderRoutingModule} from  './ServiceProvider-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceProviderRoutingModule
  ],
  declarations: SERVICEPROVIDER_MODULE_DECLARATIONS,
  exports: SERVICEPROVIDER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceProviderModule { }