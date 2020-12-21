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
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
=======
import { MenuComponent } from './Components/menu/menu.component';
>>>>>>> origin/christine
=======
import { BlogComponent } from './Components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> origin/ahmed

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
<<<<<<< HEAD
    MenuComponent
=======
    BlogComponent,

>>>>>>> origin/ahmed
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
=======
  
>>>>>>> origin/ahmed
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
