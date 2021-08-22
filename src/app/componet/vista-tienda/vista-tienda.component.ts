import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-tienda',
  templateUrl: './vista-tienda.component.html',
  styleUrls: ['./vista-tienda.component.css']
})
export class VistaTiendaComponent implements OnInit {
  image:String= "url(../../../assets/jardin.jpg)";
 estilo:any={
  "text-align": "center",
  "height": "300px",
  "padding": "12px",
  "background-image":this.image
 }
  constructor() { }

  ngOnInit(): void {
  }

}
