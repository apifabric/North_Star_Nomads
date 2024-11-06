import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeScheduleHomeComponent } from './home/FeeSchedule-home.component';
import { FeeScheduleNewComponent } from './new/FeeSchedule-new.component';
import { FeeScheduleDetailComponent } from './detail/FeeSchedule-detail.component';

const routes: Routes = [
  {path: '', component: FeeScheduleHomeComponent},
  { path: 'new', component: FeeScheduleNewComponent },
  { path: ':id', component: FeeScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FeeSchedule-detail-permissions'
      }
    }
  }
];

export const FEESCHEDULE_MODULE_DECLARATIONS = [
    FeeScheduleHomeComponent,
    FeeScheduleNewComponent,
    FeeScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeScheduleRoutingModule { }