import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParralaxComponent } from './parralax/parralax.component';
import { InfoDivComponent } from './info-div/info-div.component';
import { ParralaxtwoComponent } from './parralaxtwo/parralaxtwo.component';
import { LogoComponent } from './logo/logo.component';
import { ParallaxthreeComponent } from './parallaxthree/parallaxthree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParralaxComponent,
    InfoDivComponent,
    ParralaxtwoComponent,
    LogoComponent,
    ParallaxthreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
