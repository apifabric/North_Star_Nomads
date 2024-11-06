import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepairHistoryHomeComponent } from './home/RepairHistory-home.component';
import { RepairHistoryNewComponent } from './new/RepairHistory-new.component';
import { RepairHistoryDetailComponent } from './detail/RepairHistory-detail.component';

const routes: Routes = [
  {path: '', component: RepairHistoryHomeComponent},
  { path: 'new', component: RepairHistoryNewComponent },
  { path: ':id', component: RepairHistoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RepairHistory-detail-permissions'
      }
    }
  }
];

export const REPAIRHISTORY_MODULE_DECLARATIONS = [
    RepairHistoryHomeComponent,
    RepairHistoryNewComponent,
    RepairHistoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairHistoryRoutingModule { }