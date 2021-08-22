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
    loginOk:boolean=true;
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
                this.estado = false
                return;

            }else{
            this.usuario.nombre = user.displayName;
            this.usuario.uid = user.uid;
            this.usuario.foto = user.photoURL;
            this.estado = true;   
            
        }

        })

    }

    //  auth
    login(creden: Credenciales) {

        firebase.auth().signInWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user: any = userCredential.user;
                Swal.fire("ok!", "exito", "success");
                // ...

                localStorage.setItem('toke', user?.refreshToken);
                localStorage.setItem('email', user?.email);

              console.log(userCredential,"Aqui")

              this.mathdialogo.closeAll();
              this.router.navigateByUrl('/lista');
              setTimeout(() => {
                location.reload();
            }, 8);
             

            })
            .catch((error) => {
                
                Swal.fire("Error", "Sucedio un Error Revise sus Credenciales", "error");


            });

    }

    register(creden: Credenciales) {
        console.log("register");
        firebase.auth().createUserWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                this.mathdialogo.closeAll();
                this.router.navigateByUrl('/lista')
            })
            .catch((error) => {
                Swal.fire("Error", "Sucedio un Error Revise sus Credenciales", "error");
                // 

               
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
                // The signed-in user info.
                var user: any = result.user;
                this.mathdialogo.closeAll();
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;
                localStorage.setItem('user', user?.displayName);
                localStorage.setItem('token', accessToken);
                this.router.navigateByUrl('/lista'); 
              
                setTimeout(() => {
                    location.reload();
                }, 10);
               

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
               
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                Swal.fire("Error", "Sucedio un Error Revise sus Credenciales", "error");
                // ...
            });

    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/');
        this.auth.signOut();
    }

}