import { Component, OnInit } from '@angular/core';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from 'src/app/Service/modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
doc:Modulos={
  nombre:"",
  precio: 0,
  tamano: "",
  descripcion:"",
  numerodemodulo:0

}

  constructor(private modulo: ModuloService) { }

  ngOnInit(): void {
  }

  add(){
  this.modulo.addfile(this.doc);
 console.log(this.doc);
  }
}
