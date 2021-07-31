import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloComponent } from '../componet/modulo/modulo.component';
import { ListamoduloComponent} from '../componet/listamodulo/listamodulo.component';
import { DescripcionComponent} from '../componet/descripcion/descripcion.component';
import { AuthGuard } from '../guardian/auth.guard';




const routes: Routes = [
  


  
    { path: 'modulo/:id', component: ModuloComponent, canActivate:[AuthGuard], },
    { path: 'lista', component:  ListamoduloComponent,  canActivate:[AuthGuard],},
    {path: 'descripcion/:busque', component: DescripcionComponent,canActivate:[AuthGuard],}
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom'}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuloRouting {}
