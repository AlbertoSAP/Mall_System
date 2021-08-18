import { Component, OnInit } from '@angular/core';
import { AlquilerService } from 'src/app/Service/alquiler.service';
import { Alquiler } from '../../interface/alquiler';
import { ModuloService } from 'src/app/Service/modulo.service';
import { ActivatedRoute } from '@angular/router';
import { Modulos } from '../../interface/modulo';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-Alquiler',
  templateUrl: './Alquiler.component.html',
  styleUrls: ['./Alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  default: any;
EstadoBot:boolean = false;
  tarjetas: boolean = false;
  contado: boolean = false;
  Direccion: string = "De la rotonda Jean paul Jenny 2 cuadras al este una al norte";
  hoy: Date = new Date();


  doc: Alquiler = {

    Clientnomb: "",
    numeromodulo: 0,
    precio: 0,
    estado: false,
    fechaIni: this.hoy,
    fechafin: new Date(),
    pago: "",
    //titular:"",
    numerotarjeta: 0,
    fechaexp: new Date(),
    codigo: 0,
  }

  selected = [
    { name: "No Seleccion" },
    { name: "Tarjeta" },
    { name: "Efectivo" }


  ];

  dts: any = {};

  constructor(private servicioAq: AlquilerService,
    private modulo: ModuloService,
    private ActivatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.leer();
  }
   leer() {
    this.ActivatedRoute.params.subscribe(resp => {

      console.log(resp.id);

      this.modulo.leeruno(resp.id).then((resp:any) => {
       
       if(resp.estado == false){
         
       this.doc;
       }
       else{
      this.dts = resp;
      console.log(resp,"la respuesta");
        this.doc.numeromodulo = this.dts.numerodemodulo;
        this.doc.estado = this.dts.estado;
        this.doc.precio = this.dts.precio;
       }
      });
    });
  }


  selector(param: any) {
    console.log(param, "aqui");
    this.doc.pago = param;
    if (param == "Tarjeta") {
      this.tarjetas = true;
      this.contado = false;
    }
    if (param == "Efectivo") {
      this.contado = true;
      this.tarjetas = false;
    }
    if (param == "No Seleccion") {
      this.contado = false;
      this.tarjetas = false;
    }
  }


  Add() {
    if (this.doc.estado == true){

   
    this.servicioAq.addalquiler(this.doc, this.dts);
  } else{
    Swal.fire("Error","No se puede Alquilar el Modulo ya esta asignado a un usuario","error");
  }
}
}
