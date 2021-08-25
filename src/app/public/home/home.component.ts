import { Component, OnInit } from '@angular/core';
import { Modulos } from 'src/app/interface/modulo';
import { ModuloService } from 'src/app/Service/modulo.service';
import { AlquilerService } from '../../Service/alquiler.service';
import { ReportService } from '../../Service/reporte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
datos:any=[];
  constructor(public service: ModuloService,
              private reporte:ReportService) {
    this.service.viewModulo2().subscribe(()=>
    {
      this.datos = service.arreglo;
      this.datos = this.datos.filter((busq:any) => {
        return busq.estado == true;
      });
    });
   }

  ngOnInit() {
    this.reporte.Alquiler();
  }

}
