import { NgModule,Injectable } from '@angular/core';
import { ApiCustomer } from '../interfaces/api-customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  providers:[

  ],
})
export class ApiCustomerService {

  constructor(private http:HttpClient) {

  }

  nsertPost(post:ApiCustomer):Observable<ApiCustomer>{
    const httpoptions={headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':'*/*'
    })};
    return this.http.post<ApiCustomer>('https://cofeeshopproffer.herokuapp.com/api/landing/',httpoptions);
    }
}
