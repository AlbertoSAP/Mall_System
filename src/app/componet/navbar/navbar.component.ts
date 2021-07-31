import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Service/Auth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
estado:boolean=false;
  constructor(public auth: AuthService) { 


  }

  ngOnInit(): void {
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

}
