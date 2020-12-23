import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


getproduct():Observable<any>{
  return this.http.get('https://cofeeshopproffer.herokuapp.com/api/products/')
}

}