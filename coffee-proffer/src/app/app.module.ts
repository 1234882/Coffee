import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GalleryService} from './services/gallery.service';
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

import { ProductsService } from './services/products.service';
import {AboutService} from './services/about.service';
import { AboutComponent } from './Components/about/about.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ApiCustomerService } from './services/api-customer.service';
import { ThankyouComponent } from './Components/thankyou/thankyou.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    LandingpageComponent,
    ThankyouComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [GalleryService, ApiPostService, ContactsService, blogApiService, ProductsService,AboutService,ApiCustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
