import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.scss']
})
export class ImpresionComponent implements OnInit {
public loaded;
  images = [
    { img: "assets/impresion/1.jpg", title: "Broches"},
    { img: "assets/impresion/2.png", title: "Carnet"},
    { img: "assets/impresion/3.png", title: "Micro Perforado"},
    { img: "assets/impresion/8.jpg", title: "libreta"},
    { img: "assets/impresion/5.png", title: "Roll Up"},
    { img: "assets/impresion/9.png", title: "Poster o rótulos vinil sobre PV, Flauta, otros"},
    { img: "assets/impresion/6.jpg", title: "Stickers Papel adhesivo  "},
    { img: "assets/impresion/7.png", title: "Tarjetas de presentación "},
    { img: "assets/impresion/4.jpg", title: "Stickers de vinilo adhesivo "},


  ];

  constructor() { }

  ngOnInit() {
  }

  loading(e){

    if(e.isTrusted == true){
      this.loaded = true;
    }else{
      this.loaded = false;
    }
    console.log(this.loaded);
  }

}
