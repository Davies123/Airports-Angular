import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AirportsListComponent } from './airports-list/airports-list.component';

const routes: Routes = [
    { path: 'list', component: AirportsListComponent },
];

export const AirportsRouting: ModuleWithProviders = RouterModule.forChild(routes);