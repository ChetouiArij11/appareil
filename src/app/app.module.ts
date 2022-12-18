import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { AppareilItemComponent } from './appareil-item/appareil-item.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilsComponent,
    AppareilItemComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
