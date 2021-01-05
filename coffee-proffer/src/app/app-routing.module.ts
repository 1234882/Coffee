import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import {MenuComponent}from './Components/menu/menu.component';
import{AboutComponent}from './Components/about/about.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LandingComponent } from './Components/landing/landing.component';
const routes: Routes = [
  // {path:"landing", component:LandingComponent},
  {path:"",component:HomeComponent},
  {path:"Gallery",component:GalleryComponent},
  {path: "Product",component:MenuComponent},
  {path: "Contact",component:ContactComponent},
  {path:'Blog',component:BlogComponent},
  {path:"about", component:AboutComponent},
  // {path: "", component:LandingpageComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
