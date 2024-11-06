import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailerHomeComponent } from './home/Trailer-home.component';
import { TrailerNewComponent } from './new/Trailer-new.component';
import { TrailerDetailComponent } from './detail/Trailer-detail.component';

const routes: Routes = [
  {path: '', component: TrailerHomeComponent},
  { path: 'new', component: TrailerNewComponent },
  { path: ':id', component: TrailerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Trailer-detail-permissions'
      }
    }
  },{
    path: ':trailer_id/HaulingJob', loadChildren: () => import('../HaulingJob/HaulingJob.module').then(m => m.HaulingJobModule),
    data: {
        oPermission: {
            permissionId: 'HaulingJob-detail-permissions'
        }
    }
},{
    path: ':trailer_id/Inspection', loadChildren: () => import('../Inspection/Inspection.module').then(m => m.InspectionModule),
    data: {
        oPermission: {
            permissionId: 'Inspection-detail-permissions'
        }
    }
},{
    path: ':trailer_id/InsurancePolicy', loadChildren: () => import('../InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule),
    data: {
        oPermission: {
            permissionId: 'InsurancePolicy-detail-permissions'
        }
    }
},{
    path: ':trailer_id/MaintenanceLog', loadChildren: () => import('../MaintenanceLog/MaintenanceLog.module').then(m => m.MaintenanceLogModule),
    data: {
        oPermission: {
            permissionId: 'MaintenanceLog-detail-permissions'
        }
    }
},{
    path: ':trailer_id/RepairHistory', loadChildren: () => import('../RepairHistory/RepairHistory.module').then(m => m.RepairHistoryModule),
    data: {
        oPermission: {
            permissionId: 'RepairHistory-detail-permissions'
        }
    }
},{
    path: ':trailer_id/ServiceReport', loadChildren: () => import('../ServiceReport/ServiceReport.module').then(m => m.ServiceReportModule),
    data: {
        oPermission: {
            permissionId: 'ServiceReport-detail-permissions'
        }
    }
}
];

export const TRAILER_MODULE_DECLARATIONS = [
    TrailerHomeComponent,
    TrailerNewComponent,
    TrailerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailerRoutingModule { }