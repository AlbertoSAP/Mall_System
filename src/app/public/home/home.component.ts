import { Component, OnInit } from '@angular/core';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from 'src/app/Service/modulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
datos:any=[];
  constructor(public service: ModuloService) {
    this.service.viewModulo2().subscribe(()=>
    {
      this.datos = service.arreglo;
      this.datos = this.datos.filter((busq:any) => {
        return busq.estado == true;
      });
    });
   }

  ngOnInit() {
  }

}
