import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sublimacion',
  templateUrl: './sublimacion.component.html',
  styleUrls: ['./sublimacion.component.scss']
})
export class SublimacionComponent implements OnInit {
  public loaded;
  constructor() { }

  ngOnInit() {
  }

  images = [
    { img: "assets/sublimacion/1.png", title: "Bolso estilo mochila"},
    { img: "assets/sublimacion/8.png", title: "Lapiceros Sublimados"},
    { img: "assets/sublimacion/3.png", title: "Botella con carabina"},
    { img: "assets/sublimacion/4.png", title: "Camiseta tipo Raglan"},
    { img: "assets/sublimacion/5.png", title: "Camisas blancas sublimadas"},
    { img: "assets/sublimacion/19.png", title: "Mouse Pad"},
    { img: "assets/sublimacion/7.png", title: "Gorras Sublimadas"},
    { img: "assets/sublimacion/2.png", title: "Bolsos"},
    { img: "assets/sublimacion/9.png", title: "Mameluco Sublimado"},
    { img: "assets/sublimacion/10.png", title: "Pachon Sublimado"},
    { img: "assets/sublimacion/11.png", title: "Puzzle Sublimado"},
    { img: "assets/sublimacion/6.png", title: "Cojines Sublimados"},
    { img: "assets/sublimacion/13.png", title: "Tazas Blancas"},
    { img: "assets/sublimacion/14.png", title: "Tazas con cucharas"},
    { img: "assets/sublimacion/15.png", title: "Tazas de color"},
    { img: "assets/sublimacion/16.png", title: "Termo 500 ML dobe capa"},
    { img: "assets/sublimacion/17.png", title: "Termo Sport"},
    { img: "assets/sublimacion/18.png", title: "Termo Viajero"},
    { img: "assets/sublimacion/12.png", title: "Taza de cerveza transparente"},
  ];

  loading(e){

    if(e.isTrusted == true){
      this.loaded = true;
    }else{
      this.loaded = false;
    }
    console.log(this.loaded);
  }

}
