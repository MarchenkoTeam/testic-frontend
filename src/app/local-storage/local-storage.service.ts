import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE } from '@app/local-storage/local-storage';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId,
              @Inject(LOCAL_STORAGE) private localStorage) {
  }

  get isLocalStorageAvailable(): boolean {
    return !!this.localStorage;
  }

  setItem(key: string, value: string) {
    if (this.isLocalStorageAvailable) {
      this.localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string {
    if (this.isLocalStorageAvailable) {
      return this.localStorage.getItem(key);
    }
  }

  removeItem(key: string) {
    if (this.isLocalStorageAvailable) {
      this.localStorage.removeItem(key);
    }
  }
}
