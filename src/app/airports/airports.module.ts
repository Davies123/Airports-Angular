import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AirportsRouting } from './airports.routing';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportsDetailsComponent } from './airports-details/airports-details.component';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        AirportsRouting,
        SharedModule
    ],
    declarations: [
        AirportsListComponent,
        AirportsDetailsComponent
    ]
})
export class AirportsModule {
}