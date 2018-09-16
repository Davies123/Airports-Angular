import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PortsListComponent } from './ports-list/ports-list.component';
import { PortsResolver } from './resolvers/ports.resolver';

const routes: Routes = [
    { 
        path: 'list', 
        component: PortsListComponent,
        resolve: {
          ports: PortsResolver
        }

    },
];

export const PortsRouting: ModuleWithProviders = RouterModule.forChild(routes);