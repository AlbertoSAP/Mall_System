import { Injectable } from '@angular/core';
import {  MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackService {

    constructor(private snackBar: MatSnackBar) {
     
        
    }

    message( msg:string){
  const snackRef = this.snackBar.open(msg, undefined ,{ duration :4000
 });
 return snackRef;
    }
}