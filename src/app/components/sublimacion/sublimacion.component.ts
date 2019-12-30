import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sublimacion',
  templateUrl: './sublimacion.component.html',
  styleUrls: ['./sublimacion.component.scss']
})
export class SublimacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    { img: "assets/sublimacion/bolso-mochila.png", thumb: "assets/sublimacion/bolso-mochila.png", description: "Image 1" },
    { img: "assets/sublimacion/bolsos.png", thumb: "assets/sublimacion/bolsos.png", description: "Image 2" },
    { img: "assets/sublimacion/botellas-carabina.png", thumb: "assets/sublimacion/botellas-carabina.png", description: "Image 3" },
    { img: "assets/sublimacion/camisa-raglan.png", thumb: "assets/sublimacion/camisa-raglan.png", description: "Image 4" },
  ];

}
