import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortsRouting } from './ports.routing';
import { PortsListComponent } from './ports-list/ports-list.component';
import { PortsDetailsComponent } from './ports-details/ports-details.component';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        PortsRouting,
        SharedModule
    ],
    declarations: [
        PortsListComponent,
        PortsDetailsComponent
    ]
})
export class PortsModule {
}