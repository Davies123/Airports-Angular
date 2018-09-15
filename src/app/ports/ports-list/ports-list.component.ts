import { Component, OnInit } from '@angular/core';
import { PortsService } from '../../_services/ports.service';

@Component({
  selector: 'app-ports-list',
  templateUrl: './ports-list.component.html',
  styleUrls: ['./ports-list.component.css']
})
export class PortsListComponent implements OnInit {
  public ports = [];
  public searchText = '';

  constructor(private portsService: PortsService) { }

  ngOnInit() {
    this.portsService.getPorts()
      .subscribe(jsonData => this.ports = jsonData);
  }

}
