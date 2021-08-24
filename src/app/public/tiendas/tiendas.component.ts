import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../Service/tienda.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  arreglo:any =[];
  constructor( public tiendasService: TiendaService) { }

  ngOnInit(): void{

   this.tiendasService.leerTodo().then(resp=>{
     this.arreglo=resp;
   });
  }

  

}
