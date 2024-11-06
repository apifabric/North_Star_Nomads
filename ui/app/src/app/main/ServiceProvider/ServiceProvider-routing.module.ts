import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderHomeComponent } from './home/ServiceProvider-home.component';
import { ServiceProviderNewComponent } from './new/ServiceProvider-new.component';
import { ServiceProviderDetailComponent } from './detail/ServiceProvider-detail.component';

const routes: Routes = [
  {path: '', component: ServiceProviderHomeComponent},
  { path: 'new', component: ServiceProviderNewComponent },
  { path: ':id', component: ServiceProviderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceProvider-detail-permissions'
      }
    }
  },{
    path: ':provider_id/HaulerAssignment', loadChildren: () => import('../HaulerAssignment/HaulerAssignment.module').then(m => m.HaulerAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'HaulerAssignment-detail-permissions'
        }
    }
},{
    path: ':provider_id/InspectorAssignment', loadChildren: () => import('../InspectorAssignment/InspectorAssignment.module').then(m => m.InspectorAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'InspectorAssignment-detail-permissions'
        }
    }
},{
    path: ':provider_id/ServiceReport', loadChildren: () => import('../ServiceReport/ServiceReport.module').then(m => m.ServiceReportModule),
    data: {
        oPermission: {
            permissionId: 'ServiceReport-detail-permissions'
        }
    }
}
];

export const SERVICEPROVIDER_MODULE_DECLARATIONS = [
    ServiceProviderHomeComponent,
    ServiceProviderNewComponent,
    ServiceProviderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderRoutingModule { }