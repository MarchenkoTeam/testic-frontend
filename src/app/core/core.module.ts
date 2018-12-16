import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHostInterceptorService } from '@app/core/http-interceptors';
import { GuestGuard } from '@app/core/guest-guard';
import { AdminGuard } from '@app/core/admin-guard';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHostInterceptorService, multi: true },
    AdminGuard,
    GuestGuard
  ]
})
export class CoreModule {
}
