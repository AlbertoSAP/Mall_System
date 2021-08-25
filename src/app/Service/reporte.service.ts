import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private db: AngularFirestore) {  
    }

    Alquiler(){
        const params = "Tarjeta";
        let Alquiers:any; 
            return Alquiers = this.db.firestore.collection('Alquileres')
                                          .where("pagoCon", '==',params)
                                          .orderBy('numeroModulo','desc')
                                           .get()
                                           .then((resp:any) => {
                                               console.log(resp);  
                                               console.log(resp.docs[0].id);
                                               console.log(resp.docs[0].data());
                                                                                            
                                           }).catch((error)=>{console.log(error);
                                           })
    }
}