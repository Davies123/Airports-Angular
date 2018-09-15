import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PortsListComponent } from './ports-list/ports-list.component';
import { PortsDetailsComponent } from './ports-details/ports-details.component';

const routes: Routes = [
    { path: '', component: PortsDetailsComponent },
    { path: 'list', component: PortsListComponent },
];

export const PortsRouting: ModuleWithProviders = RouterModule.forChild(routes);
export const portRoutingComponents = [ PortsListComponent, PortsDetailsComponent];      // Tip
