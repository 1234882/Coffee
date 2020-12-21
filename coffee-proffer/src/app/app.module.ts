import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GalleryService} from './services/gallery.service'
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
=======
import { MenuComponent } from './Components/menu/menu.component';
>>>>>>> origin/christine

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
