import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiPosts } from '../interfaces/api-posts';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  constructor(private http:HttpClient) { 
    
  }
getPosts():Observable<ApiPosts[]>{
return this.http.get<ApiPosts[]>(`${environment.ApiUrl}`);
}
getPostById(id:number):Observable<ApiPosts>{
  return this.http.get<ApiPosts>(`${environment.ApiUrl}${id}`);
}

}
