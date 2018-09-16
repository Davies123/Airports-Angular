import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../../_services/airports.service';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent implements OnInit {
  public airports = [];
  public searchText = '';

  constructor(private airportsService: AirportsService) { }

  ngOnInit() {
    this.airportsService.getAirports()
      .subscribe(jsonData => this.airports = jsonData);
  }

}
