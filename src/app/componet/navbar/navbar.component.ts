import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/Auth.services';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/Auth/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
estado:boolean=false;
 
  constructor(public auth: AuthService,
    private mathdialogo: MatDialog,
    private Arouter: ActivatedRoute) { 
      this.auth.auth.authState.subscribe(user =>{
        if(user){
         this.estado =true;
         console.log(user, 'nav');
       }
       else{
         this.estado;
       }
     });
  }

  ngOnInit(): void {
   
  }

  Muestra() {
    this.mathdialogo.open(LoginComponent, {
        data: {},
        minWidth: 300,
        minHeight:250,
        maxWidth: 350,
    });
  }
  salir(){
    this.auth.logout();
    this.ngOnInit();
  }
}
