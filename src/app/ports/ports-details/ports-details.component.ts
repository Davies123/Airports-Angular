import { Component, OnInit, Input } from '@angular/core';
import { IPort } from '../../_models/port';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ports-details',
  templateUrl: './ports-details.component.html',
  styleUrls: ['./ports-details.component.css']
})
export class PortsDetailsComponent implements OnInit {

  @Input()
  port: IPort

  /*Departure Port button*/
  content = environment.departure;

  constructor() { }

  ngOnInit() {

  }

  toggle(port) {

    document.getElementById(port).classList.toggle('flipped');
  }

}
