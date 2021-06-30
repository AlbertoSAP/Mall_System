import { Component, OnInit } from '@angular/core';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from '../../Service/modulo.service';

@Component({
  selector: 'app-listamodulo',
  templateUrl: './listamodulo.component.html',
  styleUrls: ['./listamodulo.component.css']
})
export class ListamoduloComponent implements OnInit {

  myDataArray:any = {
    nombre: '',
    tamano: '',
    precio: 0,
    numerodemodulo: 0,
    descripcion: ''
  }


  constructor(private moduloServices: ModuloService) { }

  ngOnInit() {

    
this.leer();
  }

  leer(){

    this.moduloServices.viewModulo();
  }

}
