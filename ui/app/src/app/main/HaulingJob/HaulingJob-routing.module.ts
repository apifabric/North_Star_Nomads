import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaulingJobHomeComponent } from './home/HaulingJob-home.component';
import { HaulingJobNewComponent } from './new/HaulingJob-new.component';
import { HaulingJobDetailComponent } from './detail/HaulingJob-detail.component';

const routes: Routes = [
  {path: '', component: HaulingJobHomeComponent},
  { path: 'new', component: HaulingJobNewComponent },
  { path: ':id', component: HaulingJobDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HaulingJob-detail-permissions'
      }
    }
  },{
    path: ':job_id/HaulerAssignment', loadChildren: () => import('../HaulerAssignment/HaulerAssignment.module').then(m => m.HaulerAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'HaulerAssignment-detail-permissions'
        }
    }
}
];

export const HAULINGJOB_MODULE_DECLARATIONS = [
    HaulingJobHomeComponent,
    HaulingJobNewComponent,
    HaulingJobDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HaulingJobRoutingModule { }