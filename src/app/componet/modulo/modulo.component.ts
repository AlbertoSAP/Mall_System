import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

image:string = "";
actualizar : boolean = false;
agregar : boolean = true;
id:any = "";
  constructor(private modulo: ModuloService,
    private activateRout : ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    // 
    this.activateRout.params.subscribe(parametro => {
      console.log(parametro);
      
      if (parametro.id == "agregar") {
        this.actualizar = false;
         }
      else{
      this.actualizar = true;
      this.agregar = false;
      this.doc = this.modulo.leeruno(parametro.id);
      console.log(this.doc);
    }
    });
    // 
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
