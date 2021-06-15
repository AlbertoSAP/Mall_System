import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
public eror2: any = {

  smg: '',
  cod:''
};

  constructor() {
   
   }


  eror( msg: string, cod: string){

 this.eror2.smg = msg;
 this.eror2.cod = cod;
 console.log(msg, cod,"service");
 return this.eror2;
  }
    
    
  
}
