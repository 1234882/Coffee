import { Component, OnInit } from '@angular/core';
//import { Console } from 'console';
import * as $ from 'jquery';
import { GalleryService} from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  gallery: any;

  constructor(galleryService: GalleryService) {
    galleryService.getGallery().subscribe( res =>{
      this.gallery = res ;

    },err =>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
