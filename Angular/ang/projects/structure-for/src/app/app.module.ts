import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SatishDirective } from './satish.directive';
import { MydirDirective } from './mydir.directive';

@NgModule({
  declarations: [
    AppComponent,
    SatishDirective,
    MydirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
