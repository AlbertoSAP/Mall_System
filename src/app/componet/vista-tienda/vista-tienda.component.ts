import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../Service/tienda.service';

@Component({
  selector: 'app-vista-tienda',
  templateUrl: './vista-tienda.component.html',
  styleUrls: ['./vista-tienda.component.css']
})
export class VistaTiendaComponent implements OnInit {
  Array:any={};

  carrusel=[];
  image:String= "";
  estilo:any={}
  constructor(private tiendaserv: TiendaService) { }

  ngOnInit(): void {

    this.tiendaserv.leerTienda().then(resp =>{
     this.Array = resp;
     this.carrusel = this.Array.imagprod;
     this.image = `url(${this.Array.imgPortada})`;

      console.log(this.Array);
      this.estilo = { "text-align": "center",

"padding": "12px",
"background-image": this.image,
"width": "100%",
"height": "auto"

}
    });
console.log(this.image,"yo");

  }

 

  
}
