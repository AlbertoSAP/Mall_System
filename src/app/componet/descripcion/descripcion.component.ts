import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Service/Auth.services';
import { ModuloService } from 'src/app/Service/modulo.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  descrip : any={};
  size:number=300;
  constructor(public auth : AuthService ,
    private activateRout: ActivatedRoute,
    private service : ModuloService ) { 
    
          }
  ngOnInit(){
    this.activateRout.params.subscribe( parametro => 
      {
              console.log( parametro.busque,"descrip");
  
              this.descrip = this.service.leeruno(parametro.busque);
              console.log(this.descrip);
              
             })
   
  }
          




}
