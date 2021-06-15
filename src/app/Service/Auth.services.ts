import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Credenciales } from '../interface/loging';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../componet/notification/notification.component';
import { NotificationService } from './notification.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    usuario: any = {};
    constructor(private firestore: AngularFirestore,
        public auth: AngularFireAuth ,
         public mathdialogo: MatDialog,
         public noti: NotificationService,

         ) {

        this.auth.authState.subscribe(user => {

            console.log('Estado Usuario', user);

            if (!user) {
                return;
            }
            this.usuario.nombre = user.displayName;
            this.usuario.uid = user.uid;

        })

    }

    //  auth
    login(creden: Credenciales) {

        firebase.auth().signInWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.noti.eror(errorMessage,errorCode);
                this.MuestraError();
            
                
            });
    }

    register(creden: Credenciales) {
console.log("register");
        firebase.auth().createUserWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
// se manda el error al servicio
this.noti.eror(errorMessage, errorCode)
// 

                this.MuestraError();
            });
    }

    

MuestraError(){
    this.mathdialogo.open(NotificationComponent,{
        data:{},
     minWidth:250,
     maxWidth: 300,
    });
}

}