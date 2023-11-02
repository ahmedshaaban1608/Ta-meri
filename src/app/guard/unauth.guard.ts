import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountsApiService } from '../auth/services/accounts-api.service';

@Injectable()
export class UnAuthGuard {
  constructor(private auth: AccountsApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.getUser().role) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
