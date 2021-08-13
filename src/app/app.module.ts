import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './componet/header/header.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { RoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './componet/notification/notification.component';
import { ModuloComponent } from './componet/modulo/modulo.component';
import { ListamoduloComponent } from './componet/listamodulo/listamodulo.component';
import { DescripcionComponent } from './componet/descripcion/descripcion.component';
import { MaterialModule } from './material/material.module';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { HomeComponent } from './public/home/home.component';
import {AlquilerComponent } from './componet/Alquiler/Alquiler.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HeaderComponent,
    NotificationComponent,
    ModuloComponent,
    ListamoduloComponent,
    DescripcionComponent,
    HomeComponent,
    AlquilerComponent
    
  
    

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MaterialModule,
    AngularFireStorageModule,
    
  
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
