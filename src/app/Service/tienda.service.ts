import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { strings } from '@material/snackbar';
import Swal from 'sweetalert2';
import { Tienda } from '../interface/tienda';
@Injectable({
    providedIn: 'root'
})
export class TiendaService {
    datos:any = {nombre:"", links:"" ,path:""};
    Urls:string []=[];
    portada:string="";
     logo:string="";
    constructor(private storage: AngularFireStorage ,
        private db:AngularFirestore) {
     
        
    }

    subirimagen(file: any, path: string, nombre: string) {
        const filepath = path + '/' + nombre;
        const ref = this.storage.ref(filepath);
        const tarea = ref.put(file);
        tarea.then((res) => {
            this.datos.name = res.ref.name;
            console.log(res.ref.name);
            this.datos.path = path+'/'+res.ref.name;
            
            this.link(this.datos.path, path);
            console.log(res);
        }).catch((error)=>{console.log(error);
        });
    }

    link(path:string, ubicacion:string){
        this.storage.ref(path).getDownloadURL().subscribe(resp =>{
        console.log(resp, 'link');
       
        switch(ubicacion){
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

addtienda(doc:Tienda){

    return this.db.collection('Tiendas').doc(doc.Key$).set({
       
        "nombreTienda":doc.nombreTienda,
        "nombrePropietario":doc.nombrePropietario,
        "ubicacionTienda":doc.ubicacionTienda,
        "telf":doc.telf,
        "correo":doc.correo,
        "horario":doc.horario,
        "descripcion":doc.descripcion,
        "imgPortada":doc.imgPortada,
        "imgLogo":doc.imgLogo,
        "imagprod":doc.imagprod
    }).then(resp =>{
Swal.fire('Ok!','Se Guardo con Exito','success')
    }).catch((error)=>{console.log(error);
        Swal.fire('Erro!', 'Sucedio un error','error');
    })
}
}