import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../Service/Auth.services';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private service : AuthService,
               private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.auth.authState.toPromise().then(user =>{
            if(!user)
            {
              return true;
            }
            else{
              return false;
            }
                });
    }
}