import { Injectable } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { strings } from '@material/snackbar';
@Injectable({
    providedIn: 'root'
})
export class TiendaService {
    datos:any = {nombre:"", links:"" ,path:""};
    Urls:string []=[];
    portada:string="";
     logo:string="";
    constructor(private storage: AngularFireStorage ) {
     
        
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
            console.log(res);
        }).catch((error)=>{console.log(error);
        });
    }

    link(path:string)
{
    this.storage.ref(path).getDownloadURL().subscribe(resp =>{
        console.log(resp, 'link');
        this.Urls.push(resp);

        
        
    })
}

}