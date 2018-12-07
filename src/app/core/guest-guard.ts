import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '@app/local-storage/local-storage.service';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.localStorageService.hasToken()) {
      return true;
    }

    this.router.navigateByUrl('/');
    return false;
  }
}
