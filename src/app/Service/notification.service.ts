import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  sms: string = '';
  public dialogo: any = {
    cod: '',
    mens: ''
  };
  constructor() {

  }
  notific(mensaje: string, codg: string) {
    this.dialogo.cod = codg;
    this.dialogo.mens = mensaje;
    return this.dialogo;
  }

}
