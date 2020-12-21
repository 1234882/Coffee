import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import {MenuComponent}from './Components/menu/menu.component'
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"product",component:MenuComponent}




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
