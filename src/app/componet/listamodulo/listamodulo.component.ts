import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from '../../Service/modulo.service';


@Component({
  selector: 'app-listamodulo',
  templateUrl: './listamodulo.component.html',
  styleUrls: ['./listamodulo.component.css']
})
export class ListamoduloComponent implements OnInit {
arreglo :any[]=[];
  myDataArray:any = {
    nombre: '',
    tamano: '',
    precio: 0,
    numerodemodulo: 0,
    descripcion: ''
  }


  constructor(private moduloServices: ModuloService,
              ) { }

  ngOnInit() {

    
this.leer();
  }

  leer(){
 this.moduloServices.viewModulo();
 this.arreglo = this.moduloServices.arreglo;

 console.log(this.arreglo,"desde ts listado");
   }

   delete(id : string)
   {
this.moduloServices.delete(id);
console.log( id, "hi");
this.ngOnInit();
   }

   actualizar(id : string){
    this.moduloServices.leeruno(id);
  

   }
}
