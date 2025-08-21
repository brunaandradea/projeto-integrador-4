import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Soma } from './contador/soma/soma';
import { ContadorModule } from './contador/contador-module';

@NgModule({
  declarations: [
    App,
    Soma
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
