import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirportsListComponent } from './airports/airports-list/airports-list.component';
import { AirportsDetailsComponent } from './airports/airports-details/airports-details.component';
import { NavComponent } from './nav/nav.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AirportsListComponent,
    AirportsDetailsComponent,
    NavComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI0xHsv1scYseYg2ETy55DhjEmDVvhR00'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
