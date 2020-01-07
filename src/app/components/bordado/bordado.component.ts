import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bordado',
  templateUrl: './bordado.component.html',
  styleUrls: ['./bordado.component.scss']
})
export class BordadoComponent implements OnInit {
  public loaded;

  images = [
    { img: "assets/bordado/1.png", title: "Camisa Polos"},
    { img: "assets/bordado/2.png", title: "Camisa Dry-Fit"},
    { img: "assets/bordado/3.png", title: "Camisas estilo Columbia"},
    { img: "assets/bordado/4.png", title: "Camisas estilo Oxford manga larga"},
    { img: "assets/bordado/5.png", title: "Camisas U-WAFFIT"},
    { img: "assets/bordado/6.png", title: "Delantales bordados"},
    { img: "assets/bordado/7.png", title: "Toallas bordadas"},
    { img: "assets/bordado/8.png", title: "Gorras de lana o pre-lavadas"},
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
