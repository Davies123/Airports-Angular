import { Component, Input, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  zoom: number;
  lat: number;
  lng: number;
  marker: any[];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // google maps zoom level
    this.zoom = 8;

    // initial center position for the map
    this.lat =  +this.latitude;
    this.lng =  +this.longitude;

    this.markers(this.lat, this.lng);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

   mapClicked($event: MouseEvent) {
     this.marker.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
   }

  markerDragEnd(m: Imarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers(lat: number, lng: number) {
    // tslint:disable-next-line:member-ordering
    // tslint:disable-next-line:label-position
    this.marker = [
      {
        lat: lat,
        lng: lng,
        draggable: false
      }
    ];
  }

}

// tslint:disable-next-line:class-name
interface Imarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

