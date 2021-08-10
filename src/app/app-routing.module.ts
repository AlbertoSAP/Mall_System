import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ModuloRouting } from './componet/modulo.routing';
import { AuthGuard } from './guardian/auth.guard';
import { LoginGuard } from './guardian/login.guard';



const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'Login', component: LoginComponent},
  { path: 'Register', component: RegisterComponent },

  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },


  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ModuloRouting]
})
export class RoutingModule {}
