import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceReportHomeComponent } from './home/ServiceReport-home.component';
import { ServiceReportNewComponent } from './new/ServiceReport-new.component';
import { ServiceReportDetailComponent } from './detail/ServiceReport-detail.component';

const routes: Routes = [
  {path: '', component: ServiceReportHomeComponent},
  { path: 'new', component: ServiceReportNewComponent },
  { path: ':id', component: ServiceReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceReport-detail-permissions'
      }
    }
  }
];

export const SERVICEREPORT_MODULE_DECLARATIONS = [
    ServiceReportHomeComponent,
    ServiceReportNewComponent,
    ServiceReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceReportRoutingModule { }