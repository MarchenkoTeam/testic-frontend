import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/local-storage/local-storage.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.localStorageService.getRole() === 'ADMIN') {
      return true;
    }

    this.router.navigateByUrl('/');
    return false;
  }
}
