import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {

  constructor(private router: Router,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!sessionStorage.getItem('loginSuccessesSessionStorage')) {

      this.router.navigate(['/login']);
      return false;

    }

    return true;
  }

}
