import { Injectable } from '@angular/core';
import { APIcustomers } from '../interfaces/apicustomers';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIcustomerService {

  constructor(private http:HttpClient) { }

  AddCutomer(customer:APIcustomers):Observable<APIcustomers>{
    const httpOptions ={headers:new HttpHeaders({
      'Conrent-Type':'application/json',
      'Accept': '*/*'
  
    })};
    return this.http.customer<APIcustomers>('https://cofeeshopproffer.herokuapp.com/api/landing/',httpOptions);
  }
}