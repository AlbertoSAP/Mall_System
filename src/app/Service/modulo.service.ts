import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NotificationComponent } from '../componet/notification/notification.component';
import { Modulos } from '../interface/modulo';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class ModuloService {
sms:string = '';
cod:string = '';

    constructor(private db: AngularFirestore,
        public notificacion: NotificationService,
        public mathdialogo: MatDialog) {


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
                this.sms = 'Se guardo correctamente!';
                this.cod = 'Ok';
            this.notificacion.eror(this.sms, this.cod);
            this.MuestraError();
        }).catch((error) => {
            this.sms = 'No guardo !';
                this.cod = 'Erro';
            this.notificacion.eror(error, 'Error');
            this.MuestraError();
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