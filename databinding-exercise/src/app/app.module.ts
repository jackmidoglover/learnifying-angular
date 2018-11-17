import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UsernameInputComponent } from './username-input/username-input.component';
import { SingleServerComponent } from './single-server/single-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UsernameInputComponent,
    SingleServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
