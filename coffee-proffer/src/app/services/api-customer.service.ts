import { NgModule,Injectable } from '@angular/core';
import { ApiCustomer } from '../interfaces/api-customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  providers:[

  ],
})
export class ApiCustomerService {

  baseURL: string = "https://cofeeshopproffer.herokuapp.com/api/landing/'";

  constructor(private http:HttpClient) {}


  addCustomer(customer:ApiCustomer): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(customer);
    console.log(body)
    return this.http.post(this.baseURL , body,{'headers':headers})
  }
  //Insert(data: ApiCustomer): Observable<ApiCustomer> {
    //return this.http.post<ApiCustomer>('https://cofeeshopproffer.herokuapp.com/api/landing/', data, {
      //headers : new HttpHeaders ({
        //'Content-Type':'application/json',
        //'Accept':'*/*'
      //})

    //});
}

  //nsertPost(post:ApiCustomer):Observable<ApiCustomer>{
    //const httpoptions={headers:new HttpHeaders({
    //'Content-Type':'application/json',
    //'Accept':'*/*'
    //})};
    //return this.http.post<ApiCustomer>('https://cofeeshopproffer.herokuapp.com/api/landing/',httpoptions);
    //}

