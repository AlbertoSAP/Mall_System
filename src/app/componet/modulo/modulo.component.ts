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
image:any;
actualizar : boolean = false;
agregar : boolean = true;
id:any = "";
  constructor(public modulo: ModuloService,
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
    this.doc.image = this.modulo.datos.links;
    this.doc.path = this.modulo.datos.path;
      this.modulo.addfile(this.doc);
  }

// modificamos
  update(){
this.doc.image = this.modulo.datos.links;
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

  public subirArchivo(event:any) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result="";
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));    }
        const path = "imagenes";
        const name ="imag"+result;
        const file = event.target.files[0];
        const links:any = this.modulo.subirimagen(file,path,name);
        this.doc.image = links;
        this.doc.path = this.modulo.datos.path
        console.log(this.doc.image, 'imagen cargada');
        
 // console.log(event.target.files[0]);
      
  }

  

}