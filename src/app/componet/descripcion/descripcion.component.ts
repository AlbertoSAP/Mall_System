import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuloService } from 'src/app/Service/modulo.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  descrip : any={};
  constructor(private activateRout: ActivatedRoute,
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
