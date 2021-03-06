import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interface/tienda';
import { TiendaService } from '../../Service/tienda.service';
import { ModuloService } from '../../Service/modulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregartienda',
  templateUrl: './agregartienda.component.html',
  styleUrls: ['./agregartienda.component.css']
})
export class AgregartiendaComponent implements OnInit {
existe:boolean=false;
  constructor(public tienda: TiendaService,
    private modulo: ModuloService) { }
 Tienda:string="";  
 doc:Tienda ={
  nombreTienda: '',
  nombrePropietario: '',
  ubicacionTienda: '',
  telf: '',
  correo: '',
  horario: '',
  descripcion: '',
  imgPortada: '',
  imgLogo: '',
  imagprod: [],
  Key$: ''
};
imagen:string="";
imagenportada:string="";
imagenlogo:string="";
  ngOnInit(): void {
  }

  subirimg(event:any, ubicacion:string){
         console.log(event,ubicacion);
         const path = ubicacion;
         const name = event.target.files[0].name;
         const file = event.target.files[0];
         const links:any = this.tienda.subirimagen(file,path,name);
         
//        this.doc.image = links;
//        this.doc.path = this.modulo.datos.path
//        console.log(this.doc.image, 'imagen cargada');
       
//  console.log(event.target.files[0]);
  }

  agregartienda(){
    this.doc.imagprod= this.tienda.Urls;
    this.doc.imgLogo =this.tienda.logo;
    this.doc.imgPortada = this.tienda.portada;
    this.tienda.addtienda(this.doc);

    console.log(this.doc);
    
  }

  verificar()
 {
   console.log('VERIFICAR');
   
   this.modulo.leeruno(this.Tienda).then(resp => {
     if(resp != undefined){
       this.existe =true;
     }else{
      Swal.fire('Error','Verifique su Codigo','error');
     }
     
   })
 }

}
