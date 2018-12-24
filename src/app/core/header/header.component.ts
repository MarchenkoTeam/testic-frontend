import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/local-storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  isAdmin = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.isLogin = this.localStorageService.isLogin;
    if (this.isLogin) {
      this.isAdmin = this.localStorageService.isAdmin;
    }
  }

}
