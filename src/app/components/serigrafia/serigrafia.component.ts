import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serigrafia',
  templateUrl: './serigrafia.component.html',
  styleUrls: ['./serigrafia.component.scss']
})
export class SerigrafiaComponent implements OnInit {
  public loaded;
  images = [
    { img: "assets/serigrafia/1.png", title: "Camisas"},
    { img: "assets/serigrafia/2.png", title: "Lapiceros"},
    { img: "assets/serigrafia/3.png", title: "Memorias USB"},
    { img: "assets/serigrafia/4.png", title: "Termos"},
    { img: "assets/serigrafia/5.png", title: "Agendas"},
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
