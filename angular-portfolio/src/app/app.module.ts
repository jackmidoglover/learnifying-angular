import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParralaxComponent } from './parralax/parralax.component';
import { InfoDivComponent } from './info-div/info-div.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParralaxComponent,
    InfoDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
