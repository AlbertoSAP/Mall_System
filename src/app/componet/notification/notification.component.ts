import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
cod:string = '';
mens:string = '';
  constructor(public notif: NotificationService) { }

  ngOnInit(): void {

this.cod = this.notif.dialogo.cod;
this.mens = this.notif.dialogo.mens;


  }



}
