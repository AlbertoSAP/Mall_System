import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NotificationComponent } from '../componet/notification/notification.component';
import { Modulos } from '../interface/modulo';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { Datainf } from '../data/data';
import Swal from 'sweetalert2';



@Injectable({
    providedIn: 'root'
})
export class ModuloService {
    // imgApi: string = "https://firebasestorage.googleapis.com/v0/b/mallsystem.appspot.com/o/imagenes%2F";
    arreglo: Modulos[] = [];
    sms: string = '';
    cod: string = '';
    resultado: Modulos = {
        nombre: "",
        tamano: "",
        precio: 0,
        numerodemodulo: 0,
        descripcion: "",
        uid: "",
        image:""
    };
    datos = { name: "", links:"", path:"" };
    private itemCollection!: AngularFirestoreCollection<Modulos>;

    constructor(private db: AngularFirestore,
        public notificacion: NotificationService,
        public mathdialogo: MatDialog,
        private router: Router,
        private storage: AngularFireStorage

    ) {
        
    }

    subirimagen(file: any, path: string, nombre: string) {
        const filepath = path + '/' + nombre;
        const ref = this.storage.ref(filepath);
        const tarea = ref.put(file);
        tarea.then((res) => {
            this.datos.name = res.ref.name;
            console.log(res.ref.name);
            this.datos.path = path+'/'+res.ref.name;
            
            this.link(this.datos.path);
            // this.datos.token = res.ref
            console.log(res);
        }).catch((error)=>{console.log(error);
        });

      
    }
link(path:string)
{
    this.storage.ref(path).getDownloadURL().subscribe(resp =>{
        console.log(resp, 'link');
        this.datos.links = resp;
        
        
    })
}

    addfile(documento: Modulos) {
        console.log('servicio');

        this.db.collection('modulo').doc().set({
            "numeroModulo": documento.numerodemodulo,
            "nombreLocal": documento.nombre,
            "precio": documento.precio,
            "descripcion": documento.descripcion,
            "tamano": documento.tamano,
            "estado": documento.estado,
            "imageLink": documento.image,
            "pathImagen": documento.path

        }).then(() => {

            Swal.fire('Ok...', 'Se Guardo!', 'success')
 
            this.arreglo = [];
            this.router.navigate(['/lista']);
            this.datos.links="";
            this.datos.name="";
        }).catch((error) => {
            Swal.fire('Oops...', 'Sucedio un Error!', 'error')
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
                const respuesta: Modulos = {
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
                respuesta.image = sacar.imageLink;

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
        console.log(IDataSource, "service");
        return IDataSource;


    }
    //********************************************************************************************************************
    //                                lectura
    // *******************************************************************************************************************
    viewModulo2() {
        // variable para fusionar resultado
        const lectura: any[] = [];
        this.arreglo = [];

        const respuesta = this.db.collection('modulo').get();
        return respuesta.pipe(map((res => {
            console.log(res, 'subscribe');
            if(res.empty == true){
Swal.fire('Vacio', 'No existe elemetos que mostrar', 'warning')
            }
            const arr = res.docs;
            for (let arreglo of arr) {
                let resultado1: any = {};
                const a: any = arreglo.data();
                resultado1.uid = arreglo.id;
                resultado1.nombre = a.nombreLocal;
                resultado1.precio = a.precio;
                resultado1.tamano = a.tamano;
                resultado1.numerodemodulo = a.numeroModulo;
                resultado1.descripcion = a.descripcion;
                resultado1.estado = a.estado;
                resultado1.image = a.imageLink;
                resultado1.path= a.pathImagen;
                this.arreglo.push(resultado1);
                this.arreglo.sort((a: any, b: any) => a.numerodemodulo - b.numerodemodulo);
                resultado1 = {};

            }
        console.log(this.arreglo,"servicio delete");
        
            return this.arreglo;
           
        })));
    }


    delete(id: string, path:string) {
        var Ref = this.db.collection('modulo').doc(id).delete().then(res => {
            Swal.fire('Borar', 'Borrado', 'info');
            this.router.navigateByUrl('/lista');
        }).catch((error) => {
            Swal.fire('Error', 'No Borrado', 'error');

        });

        this.storage.ref(path).delete()
        .subscribe(resp =>{
            console.log(resp);
            
        })

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
            estado: false,
        };
        const leer = this.db.collection('modulo').doc(id).get().toPromise();
       return leer.then(res => {
            let array: any;
            array = res.data();
            this.resultado.uid = res.id;
            this.resultado.nombre = array.nombreLocal;
            this.resultado.numerodemodulo = array.numeroModulo;
            this.resultado.precio = array.precio;
            this.resultado.tamano = array.tamano;
            this.resultado.descripcion = array.descripcion;
            this.resultado.estado = array.estado;
            this.resultado.image = array.imageLink;
            this.resultado.path = array.pathImagen;
            return this.resultado;
        }).catch((error) => {
            console.error(error);
        });
        
    }

    Actualizar(argumento: Modulos) {

        var ActDatos = this.db.collection('modulo').doc(argumento.uid);

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
                    estado: false,
                };
                this.arreglo = [];
                this.router.navigateByUrl("/lista");

            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }

    load() {
        this.itemCollection = this.db.collection<Modulos>('modulo', query => query.orderBy('numeroModulo', 'desc'));
        return this.itemCollection.valueChanges()
            .pipe(map((modulo: Modulos[]) => {
                console.log(modulo, 'load');
                this.arreglo = [];
                for (let modelo of modulo) {
                    this.arreglo.unshift(modelo);
                }
                return this.arreglo;

            }))
    }

}