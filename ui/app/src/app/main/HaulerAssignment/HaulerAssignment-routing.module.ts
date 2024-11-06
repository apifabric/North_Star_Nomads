import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaulerAssignmentHomeComponent } from './home/HaulerAssignment-home.component';
import { HaulerAssignmentNewComponent } from './new/HaulerAssignment-new.component';
import { HaulerAssignmentDetailComponent } from './detail/HaulerAssignment-detail.component';

const routes: Routes = [
  {path: '', component: HaulerAssignmentHomeComponent},
  { path: 'new', component: HaulerAssignmentNewComponent },
  { path: ':id', component: HaulerAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HaulerAssignment-detail-permissions'
      }
    }
  }
];

export const HAULERASSIGNMENT_MODULE_DECLARATIONS = [
    HaulerAssignmentHomeComponent,
    HaulerAssignmentNewComponent,
    HaulerAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HaulerAssignmentRoutingModule { }