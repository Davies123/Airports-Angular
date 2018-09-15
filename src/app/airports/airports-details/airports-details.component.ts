import { Component, OnInit, Input } from '@angular/core';
import { IAirport } from '../../_models/airport';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-airports-details',
  templateUrl: './airports-details.component.html',
  styleUrls: ['./airports-details.component.css']
})
export class AirportsDetailsComponent implements OnInit {

  @Input()
  airport: IAirport

  /*Departure Airport button*/
  content = environment.departure;

  constructor() { }

  ngOnInit() {

  }

  toggle(airport) {

    document.getElementById(airport).classList.toggle('flipped');
  }

}
