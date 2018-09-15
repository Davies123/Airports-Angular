import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PortsListComponent } from './ports-list/ports-list.component';

const routes: Routes = [
    { path: 'list', component: PortsListComponent },
];

export const PortsRouting: ModuleWithProviders = RouterModule.forChild(routes);