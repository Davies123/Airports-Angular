import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportsDetailsComponent } from './airports-details/airports-details.component';

const routes: Routes = [
    { path: '', component: AirportsDetailsComponent },
    { path: 'list', component: AirportsListComponent }
];

export const AirportsRouting: ModuleWithProviders = RouterModule.forChild(routes);
// Array for routing components
export const airportRoutingComponents = [AirportsListComponent, AirportsDetailsComponent]     // Tip
