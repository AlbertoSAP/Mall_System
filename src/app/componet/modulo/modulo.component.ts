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
  numerodemodulo:0,
  uid:"", 
  estado:false
};


actualizar : boolean = false;
agregar : boolean = true;
id:any = "";
  constructor(private modulo: ModuloService) { }

  ngOnInit(): void {
   this.doc = this.modulo.resultado;
   console.log(this.actualizar);
console.log(this.doc.uid);
if(this.doc.uid == ""){
this.actualizar = false;
this.agregar = true;
}else{
  this.actualizar = true;
  this.agregar = false;
  
}
this.id = this.doc.uid; 

  }

  add(){
      this.modulo.addfile(this.doc);
  }

// modificamos
  update(){
this.modulo.Actualizar(this.doc);
  }

  clear()
  {
    this.doc= {
      nombre:"",
      precio: 0,
      tamano: "",
      descripcion:"",
      numerodemodulo:0,
    }
  }
}
