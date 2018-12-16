import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCAL_STORAGE } from '@app/local-storage/local-storage';
import { LocalStorageService } from '@app/local-storage/local-storage.service';

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage}
  ]
})
export class LocalStorageModule { }
