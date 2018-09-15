import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI0xHsv1scYseYg2ETy55DhjEmDVvhR00'
    })
  ],
  exports: [
    MapComponent,
    TooltipModule
  ],
  providers: [],
})
export class SharedModule { }
