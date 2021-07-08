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


  eror( cod: string){
   cod = cod.toLowerCase();
    if(cod == "ok"){

     this.eror2.cod = cod;
     this.eror2.smg ="Exito";

    }

    if(cod == "error")
    {
      this.eror2.cod = cod;
      this.eror2.smg ="Error revise";
    }
    if(cod == "invalid form")
{
  this.eror2.cod = cod;
  this.eror2.smg = " por favor complete el formulario"
}
 //console.log(msg, cod,"service");

 return this.eror2;
  }
    
}
