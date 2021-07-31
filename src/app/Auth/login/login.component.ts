import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/Auth.services';
import { Credenciales } from '../../interface/loging';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:Credenciales = 
  { email:'',
     password:'',
  }

  constructor(private service: AuthService) {
    this.service.soloLogin(false);
   }

  ngOnInit(): void {
    
  }
  Login(){
this.service.login(this.user);
console.log(this.user);
  }
social(arg:string){
  this.service.loginsocial(arg);
}
}
