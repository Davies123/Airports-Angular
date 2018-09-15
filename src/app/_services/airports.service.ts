import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { IAirport } from '../_models/airport';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {
  airportsUrl = environment.airoportsJson;

  constructor(private http: HttpClient) { }

  getAirports(): Observable<IAirport[]> {
    return this.http.get<IAirport[]>(this.airportsUrl);
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
