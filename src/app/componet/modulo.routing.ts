import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloComponent } from '../componet/modulo/modulo.component';
import { ListamoduloComponent} from '../componet/listamodulo/listamodulo.component';




const routes: Routes = [
  


  
    { path: 'modulo', component: ModuloComponent },
    { path: 'lista', component:  ListamoduloComponent},
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
