import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {

  constructor(private activateRout: ActivatedRoute ) { 

  
  this.activateRout.params.subscribe( parametro => 
    {
            console.log( parametro,"descrip");
            
           })
          }
//   ngOnInit(): void {
//   }

//   cambio(){

//   this.activateRout.params.subscribe( parametro => 
//     {
//       console.log( parametro,"descrip");
      
//     })
// }

}
