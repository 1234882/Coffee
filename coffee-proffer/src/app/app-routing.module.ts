import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:'ApiPosts',component:BlogComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
