import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorAssignmentHomeComponent } from './home/InspectorAssignment-home.component';
import { InspectorAssignmentNewComponent } from './new/InspectorAssignment-new.component';
import { InspectorAssignmentDetailComponent } from './detail/InspectorAssignment-detail.component';

const routes: Routes = [
  {path: '', component: InspectorAssignmentHomeComponent},
  { path: 'new', component: InspectorAssignmentNewComponent },
  { path: ':id', component: InspectorAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InspectorAssignment-detail-permissions'
      }
    }
  }
];

export const INSPECTORASSIGNMENT_MODULE_DECLARATIONS = [
    InspectorAssignmentHomeComponent,
    InspectorAssignmentNewComponent,
    InspectorAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorAssignmentRoutingModule { }