import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { strings } from '@material/snackbar';
import Swal from 'sweetalert2';
import { Tienda } from '../interface/tienda';
@Injectable({
    providedIn: 'root'
})
export class TiendaService {
    datos: any = { nombre: "", links: "", path: "" };
    Urls: string[] = [];
    portada: string = "";
    logo: string = "";
    constructor(private storage: AngularFireStorage,
        private db: AngularFirestore) {


    }

    subirimagen(file: any, path: string, nombre: string) {
        const filepath = path + '/' + nombre;
        const ref = this.storage.ref(filepath);
        const tarea = ref.put(file);
        tarea.then((res) => {
            this.datos.name = res.ref.name;
            console.log(res.ref.name);
            this.datos.path = path + '/' + res.ref.name;

            this.link(this.datos.path, path);
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    link(path: string, ubicacion: string) {
        this.storage.ref(path).getDownloadURL().subscribe(resp => {
            console.log(resp, 'link');

            switch (ubicacion) {
                case 'Coleccion':
                    this.Urls.push(resp);
                    break;
                case 'Logo':
                    this.logo = resp;
                    break;
                case 'Portada':
                    this.portada = resp
                    break;

            }



        })
    }

    addtienda(doc: Tienda) {

        return this.db.collection('Tiendas').doc().set({

            "nombreTienda": doc.nombreTienda,
            "nombrePropietario": doc.nombrePropietario,
            "ubicacionTienda": doc.ubicacionTienda,
            "telf": doc.telf,
            "correo": doc.correo,
            "horario": doc.horario,
            "descripcion": doc.descripcion,
            "imgPortada": doc.imgPortada,
            "imgLogo": doc.imgLogo,
            "imagprod": doc.imagprod
        }).then(resp => {
            Swal.fire('Ok!', 'Se Guardo con Exito', 'success')
        }).catch((error) => {
            console.log(error);
            Swal.fire('Erro!', 'Sucedio un error', 'error');
        })
    }

    leerTienda(id:string) {
        let tienda: Tienda = {
            Key$: '',
            nombreTienda: '',
            nombrePropietario: '',
            ubicacionTienda: '',
            telf: '',
            correo: '',
            horario: '',
            descripcion: '',
            imgPortada: '',
            imgLogo: '',
            imagprod: []
        };
        const view = this.db.collection('Tiendas').doc(id).get().toPromise();

        return view.then((resp: any) => {
            console.log(resp);

               
            
                let dts: Tienda = resp.data();

                tienda.Key$ = resp.id;
                tienda.nombreTienda = dts.nombreTienda;
                tienda.nombrePropietario = dts.nombrePropietario;
                tienda.ubicacionTienda = dts.ubicacionTienda;
                tienda.telf = dts.telf;
                tienda.correo = dts.correo;
                tienda.horario = dts.horario;
                tienda.descripcion = dts.descripcion;
                tienda.imgPortada = dts.imgPortada;
                tienda.imgLogo = dts.imgLogo;
                tienda.imagprod = dts.imagprod;
                console.log(tienda);
         
            return tienda;
        }).catch((error) => {
            console.log(error);
        });
    }

    // Este servicio lee toda las tiendas a la pantalla principal

    leerTodo() {
        let arreglo:any =[];
        let tienda: Tienda = {
            Key$: '',
            nombreTienda: '',
            nombrePropietario: '',
            ubicacionTienda: '',
            telf: '',
            correo: '',
            horario: '',
            descripcion: '',
            imgPortada: '',
            imgLogo: '',
            imagprod: []
        };
        const view = this.db.collection('Tiendas').get().toPromise();

        return view.then((resp: any) => {
            console.log(resp);

            const objeto = resp.docs;
            for (let recd of objeto) {
                let dts: Tienda = recd.data();

                tienda.Key$ = recd.id;
                tienda.nombreTienda = dts.nombreTienda;
                tienda.nombrePropietario = dts.nombrePropietario;
                tienda.ubicacionTienda = dts.ubicacionTienda;
                tienda.telf = dts.telf;
                tienda.correo = dts.correo;
                tienda.horario = dts.horario;
                tienda.descripcion = dts.descripcion;
                tienda.imgPortada = dts.imgPortada;
                tienda.imgLogo = dts.imgLogo;
                tienda.imagprod = dts.imagprod;

                
                arreglo.push(tienda);
                 tienda = {
                    Key$: '',
                    nombreTienda: '',
                    nombrePropietario: '',
                    ubicacionTienda: '',
                    telf: '',
                    correo: '',
                    horario: '',
                    descripcion: '',
                    imgPortada: '',
                    imgLogo: '',
                    imagprod: []
                };
            }
            console.log(arreglo,"tiendas");
            return arreglo;
            
        }).catch((error) => {
            console.log(error);
        });
    }
    }

