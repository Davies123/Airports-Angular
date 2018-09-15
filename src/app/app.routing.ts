import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'ports', loadChildren: './ports/ports.module#PortsModule' },
      { path: 'airports', loadChildren: './airports/airports.module#AirportsModule' },
      { path: 'map', component: MapComponent }
    ]
  }
];

// export const AirportsListRoutes = RouterModule.forChild(routes);
