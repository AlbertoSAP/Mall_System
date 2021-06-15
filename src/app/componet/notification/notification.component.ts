import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/Service/Auth.services';
import { NotificationService } from '../../Service/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

 dialogo:string = "";
 codigo:string="";
  constructor(private auth: AuthService,
    public noti : NotificationService) { }

  ngOnInit(): void {

    this.dialogo =this.noti.eror2.smg;
    this.codigo = this.noti.eror2.cod;
    console.log(this.noti.eror2.smg);
    
  }


  
}