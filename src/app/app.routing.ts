import { Routes, RouterModule } from '@angular/router';
import { AirportsListComponent } from './airports/airports-list/airports-list.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: 'airports', component: AirportsListComponent },
  { path: 'map', component: MapComponent }
];

// export const AirportsListRoutes = RouterModule.forChild(routes);
