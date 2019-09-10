import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router ) { }
  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
    });
  }
}
