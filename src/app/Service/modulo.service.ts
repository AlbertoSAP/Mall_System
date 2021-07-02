import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NotificationComponent } from '../componet/notification/notification.component';
import { Modulos } from '../interface/modulo';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
import firebase from 'firebase/app';
import { asap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ModuloService {
    arreglo: Modulos[] = [];
    sms: string = '';
    cod: string = '';
    resultado: Modulos = {
        nombre: "",
        tamano: "",
        precio: 0,
        numerodemodulo: 0,
        descripcion: "",
        uid: ""
    };


    constructor(private db: AngularFirestore,
        public notificacion: NotificationService,
        public mathdialogo: MatDialog,
        private router: Router
    ) {


    }
    addfile(documento: Modulos) {

        console.log('servicio');

        this.db.collection('modulo').doc().set({
            "numeroModulo": documento.numerodemodulo,
            "nombreLocal": documento.nombre,
            "precio": documento.precio,
            "descripcion": documento.descripcion,
            "tamano": documento.tamano

        }).then(() => {
            this.cod = 'Ok';
            this.notificacion.eror(this.cod);
            this.MuestraError();
            this.router.navigateByUrl("/lista");
        }).catch((error) => {
            this.cod = 'Error';
            this.notificacion.eror(this.cod);
            this.MuestraError();
        });

    }

    viewModulo() {
        const dbRef = this.db.collection('modulo').ref.get().then((snapshot) => {
            console.log(snapshot.docs);
            const data = snapshot.docs;

            //    console.log(data[0].id);
            //    console.log(data[0].data());

            for (let docum of snapshot.docs) {
                const sacar: any = docum.data();
                // console.log(sacar, "sacar"); 
                this.resultado.nombre = sacar.nombreLocal;
                this.resultado.precio = sacar.precio;
                this.resultado.tamano = sacar.tamano;
                this.resultado.numerodemodulo = sacar.numeroModulo;
                this.resultado.descripcion = sacar.descripcion;
                this.resultado.uid = docum.id;

                //  console.log(this.resultado);
                this.arreglo.push(this.resultado);
                this.resultado = {
                    nombre: "",
                    tamano: "",
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: "",
                    uid: ""
                };
            }
            console.log(this.arreglo, "service");

            return this.arreglo;

        })
            .catch((error) => {
                console.error(error);
            });

    }


    //********************************************************************************************************************
    //                                lectura asap
    // *******************************************************************************************************************
    viewModulo2() {

        // variable para fusionar resultado
        const lectura: any = [];
        const leer = this.db.collection('modulo').get().toPromise();
        leer.then(res => {
            const arr = res.docs;
            for (let arreglo of arr) {
                const a: any = arreglo.data();
                // console.log(arreglo.id);
                console.log(arreglo.data());
                this.resultado.uid = arreglo.id;
                this.resultado.nombre = a.nombreLocal;
                this.resultado.precio = a.precio;
                this.resultado.tamano = a.tamano;
                this.resultado.numerodemodulo = a.numeroModulo;
                this.resultado.descripcion = a.descripcion;
                lectura.push(this.resultado);
                this.resultado = {
                    nombre: "",
                    tamano: "",
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: "",
                    uid: ""
                };
            }
            console.log(lectura);
        }).catch((error) => {
            console.error(error);
        });


    }


    delete(id: string) {
        var Ref = this.db.collection('modulo').doc(id).delete();
        this.arreglo = [];
        this.viewModulo();


    }

    MuestraError() {
        this.mathdialogo.open(NotificationComponent, {
            data: {},
            minWidth: 250,
            maxWidth: 300,
        });
    }

    leeruno(id: string) {
        this.resultado = {
            nombre: "",
            tamano: "",
            precio: 0,
            numerodemodulo: 0,
            descripcion: "",
            uid: ""
        };
        const leer = this.db.collection('modulo').doc(id).get().toPromise();
        leer.then(res => {
            let array: any;
            array = res.data();
            this.resultado.uid = res.id;
            this.resultado.nombre = array.nombreLocal;
            this.resultado.numerodemodulo = array.numeroModulo;
            this.resultado.precio = array.precio;
            this.resultado.tamano = array.tamano;
            this.resultado.descripcion = array.descripcion;
            console.log("this.resultado", this.resultado);
            this.router.navigateByUrl("/modulo");
            return this.resultado;


        }).catch((error) => {
            console.error(error);
        });
    }

    Actualizar(argumento: Modulos) {

        var ActDatos = this.db.collection('modulo').doc(argumento.uid);

        // Set the "capital" field of the city 'DC'
        return ActDatos.update({
            numeroModulo: argumento.numerodemodulo,
            nombreLocal: argumento.nombre,
            precio: argumento.precio,
            descripcion: argumento.descripcion,
            tamano: argumento.tamano
        })
            .then(() => {
                console.log("Actualizar los Datos", ActDatos);
               this.resultado = {
                    nombre: "",
                    tamano: "",
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: "",
                    uid: ""
                };
                this.router.navigateByUrl("/lista");

            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }

}