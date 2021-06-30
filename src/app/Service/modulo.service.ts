import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NotificationComponent } from '../componet/notification/notification.component';
import { Modulos } from '../interface/modulo';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
import firebase from 'firebase/app';


@Injectable({
    providedIn: 'root'
})
export class ModuloService {

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
        }).catch((error) => {
            this.cod = 'Error';
            this.notificacion.eror(this.cod);
            this.MuestraError();
        });

    }

    viewModulo() {

        // const dbRef = this.db.collection('modulo').ref.get().then((snapshot) => {
        //  console.log(snapshot);

        // }).catch((error) => {
        //   console.error(error);
        // });

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
            }
            console.log(lectura);
        }).catch((error) => {
            console.error(error);
        });


    }

    MuestraError() {
        this.mathdialogo.open(NotificationComponent, {
            data: {},
            minWidth: 250,
            maxWidth: 300,
        });
    }


}