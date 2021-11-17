// import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CityComponent } from './components/city/city.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CityComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
//   schemas: [
//     CUSTOM_ELEMENTS_SCHEMA
//   ]
// })
// export class AppModule { }

import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: APP_BASE_HREF, useValue: '/wc-city-angular' }],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('wc-city-angular', el);
  }
}
