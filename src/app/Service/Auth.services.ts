import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Credenciales } from '../interface/loging';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../componet/notification/notification.component';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    usuario: any = {};
    cod: string = "";
    estado: boolean = true;
    constructor(private firestore: AngularFirestore,
        public auth: AngularFireAuth,
        public mathdialogo: MatDialog,
        public noti: NotificationService,
        private router: Router

    ) {

        this.auth.authState.subscribe(user => {

            console.log('Estado Usuario', user);

            if (!user) {
                
                return;
                
            }
            this.usuario.nombre = user.displayName;
            this.usuario.uid = user.uid;
            this.usuario.foto = user.photoURL;

        })

    }

    //  auth
    login(creden: Credenciales) {

        firebase.auth().signInWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user:any = userCredential.user;
                Swal.fire("ok!", "exito","success");
                // ...
             
                localStorage.setItem('toke', user?.refreshToken)
           
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.cod = "Error",
                    this.noti.eror(this.cod);
                this.MuestraError();


            });
          
    }

    register(creden: Credenciales) {
        console.log("register");
        firebase.auth().createUserWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                this.cod = "ok";
                this.noti.eror(this.cod);
                this.MuestraError();

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // se manda el error al servicio
                this.cod = "error";
                this.noti.eror(this.cod);
                // 

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

    loginsocial(proveedor: string) {
        var provider = new firebase.auth.OAuthProvider(proveedor);
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential: any = result.credential;
               console.log(result);
               this.router.navigateByUrl('/lista')
                // The signed-in user info.
                var user:any = result.user;
this.mathdialogo.closeAll();
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;
                 localStorage.setItem('user', user?.displayName);
                localStorage.setItem('token', accessToken);
                
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });

    }

    logout(){
        localStorage.clear();
        this.auth.signOut();
        
                }


}