import { Component, OnInit } from '@angular/core';
import { Credenciales } from 'src/app/interface/loging';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Service/Auth.services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:Credenciales={
  email:'',
  password:''  
}
isDisabled :boolean = false;
password2:string = '';
diseno:string = '';
  constructor(private auth :AuthService ) { }

  ngOnInit(): void {
  this.isDisabled ;
  console.log(this.isDisabled );
  
  }

validar(){
console.log('aqui');
console.log(this.password2)
if(  this.user.password == this.password2)
{
 this.isDisabled  = true;
 this.diseno='black';
}
else{
this.isDisabled  = false;
this.diseno='red';
}
}


  funtionregister(){
    this.auth.register(this.user);
    console.log('btn');
    
  
  }


}
