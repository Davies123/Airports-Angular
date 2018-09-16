import { Component, OnInit } from '@angular/core';
import { PortsService } from '../../_services/ports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ports-list',
  templateUrl: './ports-list.component.html',
  styleUrls: ['./ports-list.component.css']
})
export class PortsListComponent implements OnInit {
  public ports = [];
  public searchText = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.portsService.getPorts()
    //   .subscribe(jsonData => this.ports = jsonData);

    // this.ports = this.route.snapshot.data['ports'];

    this.route.data.subscribe(data => this.ports = data['ports']);
  }

}
