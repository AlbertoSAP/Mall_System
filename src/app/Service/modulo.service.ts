import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotificationComponent } from '../componet/notification/notification.component';
import { Modulos } from '../interface/modulo';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Datainf } from '../data/data';


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
            "tamano": documento.tamano,
            "estado": documento.estado

        }).then(() => {
            this.cod = 'Ok';
            this.notificacion.eror(this.cod);
            this.MuestraError();
            this.arreglo = [];
            this.router.navigateByUrl("/lista");
        }).catch((error) => {
            this.cod = 'Error';
            this.notificacion.eror(this.cod);
            this.MuestraError();
        });
    

    }

    viewModulo() {
        this.arreglo = [];
        let IDataSource: any = [];

        const dbRef = this.db.collection('modulo').ref.get().then((snapshot) => {
            console.log(snapshot.docs);
            const data = snapshot.docs;

            //    console.log(data[0].id);
            //    console.log(data[0].data());

            for (let docum of snapshot.docs) {
                const sacar: any = docum.data();
                // console.log(sacar, "sacar"); 
                const respuesta : Modulos ={
                    nombre: '',
                    tamano: '',
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: ''
                };
               respuesta.nombre = sacar.nombreLocal;
               respuesta.precio = sacar.precio;
               respuesta.tamano = sacar.tamano;
               respuesta.numerodemodulo = sacar.numeroModulo;
               respuesta.descripcion = sacar.descripcion;
               respuesta.uid = docum.id;
               respuesta.estado = sacar.estado;
               respuesta.image = sacar.image;

                //  console.log(this.resultado);
                IDataSource.push(respuesta);
                this.resultado = {
                    nombre: "",
                    tamano: "",
                    precio: 0,
                    numerodemodulo: 0,
                    descripcion: "",
                    uid: "", 
                    estado: false
                };
            }
        })
            .catch((error) => {
                console.error(error);
            });
            console.log(IDataSource ,  "service");
            return IDataSource;
           
            
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
                this.resultado.estado = a.estado;
                this.resultado.image = a.image;
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

        return lectura;
    }


    delete(id: string) {
        var Ref = this.db.collection('modulo').doc(id).delete();
      
        // this.viewModulo();


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
            uid: "",
            estado:false,
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
            this.resultado.estado = array.estado;
            console.log("this.resultado", this.resultado);
    
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
            tamano: argumento.tamano,
            estado: argumento.estado,
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
                    estado:false,
                };
                this.arreglo = [];
                this.router.navigateByUrl("/lista");

            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }

}