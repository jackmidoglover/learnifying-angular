import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParralaxComponent } from './parralax/parralax.component';
import { InfoDivComponent } from './info-div/info-div.component';
import { ParralaxtwoComponent } from './parralaxtwo/parralaxtwo.component';
import { ParallaxthreeComponent } from './parallaxthree/parallaxthree.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './info-div/card/card.component';
import { MenuComponent } from './info-div/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParralaxComponent,
    InfoDivComponent,
    ParralaxtwoComponent,
    ParallaxthreeComponent,
    FooterComponent,
    CardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
