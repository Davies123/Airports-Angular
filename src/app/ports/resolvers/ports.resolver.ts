import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PortsService } from '../../_services/ports.service';
import { IPort } from '../../_models/port';

@Injectable()
export class PortsResolver implements Resolve<Observable<IPort[]>> {
  constructor(private portsService: PortsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route, state);
    return this.portsService.getPorts().pipe(
        delay(5000)
      );
  }
}