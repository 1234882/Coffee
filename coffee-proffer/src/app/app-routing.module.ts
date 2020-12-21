import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import {MenuComponent}from './Components/menu/menu.component'
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Gallery",component:GalleryComponent},
<<<<<<< HEAD
  {path:"product",component:MenuComponent}


=======
  {path:'ApiPosts',component:BlogComponent},
>>>>>>> origin/ahmed


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
