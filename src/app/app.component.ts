import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './Service/Auth.services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MallSystem';

  constructor(private db : AngularFirestore,
    public auth: AuthService) {
  console.log(this.auth.estado);
  
    }
}
