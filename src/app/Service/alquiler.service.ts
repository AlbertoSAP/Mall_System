import { Injectable } from '@angular/core';
import { Alquiler } from '../interface/alquiler';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { Modulos } from '../interface/modulo';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AlquilerService {
    hoy: Date = new Date();
    arreglo: Modulos[] = [];
    resultado: Modulos = {
        nombre: "",
        tamano: "",
        precio: 0,
        numerodemodulo: 0,
        descripcion: "",
        uid: "",
        image:""
    };


    constructor(private db: AngularFirestore,
             private router:Router) {


    }

    addalquiler(documento: Alquiler, doc:Modulos) {

        this.db.collection('Alquileres').doc().set({

            "cliente": documento.Clientnomb,
            "numeroModulo": documento.numeromodulo,
            "precio": documento.precio,
            "estado": documento.estado,
            "inicioAlquiler": documento.fechaIni,
            "finAlquiler": documento.fechafin,
            "pagoCon": documento.pago,
            //"Titular": documento.titular,
            "tarjeta": documento.numerotarjeta,
            "expiraciondeTarjeta": documento.fechaexp,
            "codigotarjeta": documento.codigo,


        }).then(rep => {
            this.ActualizarBodega(doc);
            Swal.fire('Añadido', 'Se ha Guardado con Exito', "success");
            console.log(rep,"se guardo");
         this.cod(doc.uid,documento.Clientnomb);
        }).catch((error) => {
            console.log(error);

        });

    }

    ActualizarBodega(argumento: Modulos) {

        var ActDatos = this.db.collection('modulo').doc(argumento.uid);

        return ActDatos.update({
            numeroModulo: argumento.numerodemodulo,
            nombreLocal: argumento.nombre,
            precio: argumento.precio,
            descripcion: argumento.descripcion,
            tamano: argumento.tamano,
            estado:false,
        })
            .then(() => {
                console.log("Actualizar los Datos", ActDatos);
                this.resultado = {
                    nombre: "",
                    tamano: "",
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: "",
                    uid: "",
                    estado: false,
                };
                this.arreglo = [];
                this.router.navigateByUrl("");

            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }

    cod(id:any, nombre:string){
        this.db.collection('codigoAlquiler').doc().set({
        "codigo":id,
        "usuarioNombre":nombre,
           });
        }

}