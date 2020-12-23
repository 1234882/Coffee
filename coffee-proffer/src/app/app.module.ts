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
import { MenuComponent } from './Components/menu/menu.component';

import { BlogComponent } from './Components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiPostService } from './services/api-post.service';
import { ContactComponent } from './Components/contact/contact.component';
import { ContactsService } from './services/contacts.service';
import { blogApiService } from './services/blogapi.service';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    MenuComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [GalleryService, ApiPostService, ContactsService, blogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
