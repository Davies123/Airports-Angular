import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPort } from '../_models/port';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortsService {
  portsUrl = environment.portsJson;

  constructor(private http: HttpClient) { }

  getPorts(): Observable<IPort[]> {
    return this.http.get<IPort[]>(this.portsUrl);
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
