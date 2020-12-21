import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getGallery(): Observable<any>{
    return this.http.get('https://cofeeshopproffer.herokuapp.com/api/gallery/');
  }
}
