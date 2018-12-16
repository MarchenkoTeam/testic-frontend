import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from '@app/local-storage/local-storage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    LocalStorageModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
