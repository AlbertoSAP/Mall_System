import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Credenciales } from '../interface/loging';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    usuario: any = {};
    constructor(private firestore: AngularFirestore,
        public auth: AngularFireAuth) {

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
            });
    }

    register(creden: Credenciales) {

        firebase.auth().createUserWithEmailAndPassword(creden.email, creden.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }


}