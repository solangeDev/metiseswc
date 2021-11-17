import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  // declarations: [
  //   AppComponent
  // ],
  // imports: [
  //   BrowserModule
  // ],
  // bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [{ provide: APP_BASE_HREF, useValue: "/wc-footer" }],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {  
  constructor(private injector: Injector) {
  const el = createCustomElement(AppComponent, { injector });
  customElements.define('wc-footer', el);
}

  ngDoBootstrap() {}
}
