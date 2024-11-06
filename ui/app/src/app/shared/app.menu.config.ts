import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { FeeScheduleCardComponent } from './FeeSchedule-card/FeeSchedule-card.component';

import { HaulerAssignmentCardComponent } from './HaulerAssignment-card/HaulerAssignment-card.component';

import { HaulingJobCardComponent } from './HaulingJob-card/HaulingJob-card.component';

import { InspectionCardComponent } from './Inspection-card/Inspection-card.component';

import { InspectorAssignmentCardComponent } from './InspectorAssignment-card/InspectorAssignment-card.component';

import { InsurancePolicyCardComponent } from './InsurancePolicy-card/InsurancePolicy-card.component';

import { MaintenanceLogCardComponent } from './MaintenanceLog-card/MaintenanceLog-card.component';

import { RepairHistoryCardComponent } from './RepairHistory-card/RepairHistory-card.component';

import { ServiceProviderCardComponent } from './ServiceProvider-card/ServiceProvider-card.component';

import { ServiceReportCardComponent } from './ServiceReport-card/ServiceReport-card.component';

import { TrailerCardComponent } from './Trailer-card/Trailer-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'FeeSchedule', name: 'FEESCHEDULE', icon: 'view_list', route: '/main/FeeSchedule' }
    
        ,{ id: 'HaulerAssignment', name: 'HAULERASSIGNMENT', icon: 'view_list', route: '/main/HaulerAssignment' }
    
        ,{ id: 'HaulingJob', name: 'HAULINGJOB', icon: 'view_list', route: '/main/HaulingJob' }
    
        ,{ id: 'Inspection', name: 'INSPECTION', icon: 'view_list', route: '/main/Inspection' }
    
        ,{ id: 'InspectorAssignment', name: 'INSPECTORASSIGNMENT', icon: 'view_list', route: '/main/InspectorAssignment' }
    
        ,{ id: 'InsurancePolicy', name: 'INSURANCEPOLICY', icon: 'view_list', route: '/main/InsurancePolicy' }
    
        ,{ id: 'MaintenanceLog', name: 'MAINTENANCELOG', icon: 'view_list', route: '/main/MaintenanceLog' }
    
        ,{ id: 'RepairHistory', name: 'REPAIRHISTORY', icon: 'view_list', route: '/main/RepairHistory' }
    
        ,{ id: 'ServiceProvider', name: 'SERVICEPROVIDER', icon: 'view_list', route: '/main/ServiceProvider' }
    
        ,{ id: 'ServiceReport', name: 'SERVICEREPORT', icon: 'view_list', route: '/main/ServiceReport' }
    
        ,{ id: 'Trailer', name: 'TRAILER', icon: 'view_list', route: '/main/Trailer' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,FeeScheduleCardComponent

    ,HaulerAssignmentCardComponent

    ,HaulingJobCardComponent

    ,InspectionCardComponent

    ,InspectorAssignmentCardComponent

    ,InsurancePolicyCardComponent

    ,MaintenanceLogCardComponent

    ,RepairHistoryCardComponent

    ,ServiceProviderCardComponent

    ,ServiceReportCardComponent

    ,TrailerCardComponent

];