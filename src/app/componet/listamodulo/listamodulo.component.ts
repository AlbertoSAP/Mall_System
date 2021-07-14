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
  dataSource: any = [] ;
  myDataArray:any = {
    nombre: '',
    tamano: '',
    precio: 0,
    numerodemodulo: 0,
    descripcion: ''
  };
  
  displayedColumns: string[] = [
  'nombre',
  'tamano',
  'precio',
  'numerodemodulo',
  'descripcion'
];
  constructor(private moduloServices: ModuloService,
              ) {}

  ngOnInit() {
    
    
  this.leer();
  }

  leer(){
//  this.moduloServices.viewModulo();
 this.dataSource = this.moduloServices.viewModulo();

//  console.log(this.arreglo,"desde ts listado");
console.log(this.dataSource, "forma 2");
 
   }

   recargar(){
  this.dataSource;
  console.log(this.dataSource);
  
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
