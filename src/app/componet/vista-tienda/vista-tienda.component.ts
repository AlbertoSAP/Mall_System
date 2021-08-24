import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../Service/tienda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-tienda',
  templateUrl: './vista-tienda.component.html',
  styleUrls: ['./vista-tienda.component.css']
})
export class VistaTiendaComponent implements OnInit {
  Array:any={};
id:any;
  carrusel=[];
  image:String= "";
  estilo:any={}
  constructor(private tiendaserv: TiendaService,
              private ActivatedRoute:ActivatedRoute) {
      

               }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(res => {
    this.tiendaserv.leerTienda(res.id).then(resp =>{
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
console.log(res.id,"id");

        })

  }

 

  
}
