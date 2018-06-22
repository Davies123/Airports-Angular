import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../_services/airports.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent implements OnInit {
  public airports = [];
  public searchText = '';

  /*Departure Airport button*/
  content = environment.departure;

  constructor(private airportsService: AirportsService) { }

  ngOnInit() {
    this.airportsService.getAirports()
      .subscribe(jsonData => this.airports = jsonData);
  }

  toggle(airport) {
    const arp = airport;

    document.getElementsByClassName('card')[airport].classList.toggle('flipped');
  }

}
