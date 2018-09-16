import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortsRouting } from './ports.routing';
import { PortsListComponent } from './ports-list/ports-list.component';
import { PortsDetailsComponent } from './ports-details/ports-details.component';
import { SharedModule } from '../shared.module';
import { PortsResolver } from './resolvers/ports.resolver';

@NgModule({
    imports: [
        CommonModule,
        PortsRouting,
        SharedModule
    ],
    providers: [
        PortsResolver
    ],
    declarations: [
        PortsListComponent,
        PortsDetailsComponent
    ]
})
export class PortsModule {
}