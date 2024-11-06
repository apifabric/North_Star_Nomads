import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'FeeSchedule', loadChildren: () => import('./FeeSchedule/FeeSchedule.module').then(m => m.FeeScheduleModule) },
    
        { path: 'HaulerAssignment', loadChildren: () => import('./HaulerAssignment/HaulerAssignment.module').then(m => m.HaulerAssignmentModule) },
    
        { path: 'HaulingJob', loadChildren: () => import('./HaulingJob/HaulingJob.module').then(m => m.HaulingJobModule) },
    
        { path: 'Inspection', loadChildren: () => import('./Inspection/Inspection.module').then(m => m.InspectionModule) },
    
        { path: 'InspectorAssignment', loadChildren: () => import('./InspectorAssignment/InspectorAssignment.module').then(m => m.InspectorAssignmentModule) },
    
        { path: 'InsurancePolicy', loadChildren: () => import('./InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule) },
    
        { path: 'MaintenanceLog', loadChildren: () => import('./MaintenanceLog/MaintenanceLog.module').then(m => m.MaintenanceLogModule) },
    
        { path: 'RepairHistory', loadChildren: () => import('./RepairHistory/RepairHistory.module').then(m => m.RepairHistoryModule) },
    
        { path: 'ServiceProvider', loadChildren: () => import('./ServiceProvider/ServiceProvider.module').then(m => m.ServiceProviderModule) },
    
        { path: 'ServiceReport', loadChildren: () => import('./ServiceReport/ServiceReport.module').then(m => m.ServiceReportModule) },
    
        { path: 'Trailer', loadChildren: () => import('./Trailer/Trailer.module').then(m => m.TrailerModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }