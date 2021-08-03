import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from '../../Service/modulo.service';


@Component({
  selector: 'app-listamodulo',
  templateUrl: './listamodulo.component.html',
  styleUrls: ['./listamodulo.component.css']
})
export class ListamoduloComponent implements OnInit {
  arreglo: any  ;
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
  constructor(public moduloServices: ModuloService
              ) {
              // this.arreglo = this.moduloServices.arreglo;
              this.moduloServices.viewModulo2().subscribe(()=>{
                
              });

              }

   ngOnInit() {
  
  this.leer();
  }

  leer(){
//  this.moduloServices.viewModulo();
  // this.arreglo = this.moduloServices.viewModulo();
  // this.arreglo = this.moduloServices.viewModulo2();
  
      
//  console.log(this.arreglo,"desde ts listado");
console.log(this.arreglo, "forma 2");
 
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
