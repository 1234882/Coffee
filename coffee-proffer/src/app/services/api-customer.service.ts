import { Injectable } from '@angular/core';
import { ApiCustomer } from '../interfaces/api-customer';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiCustomerService {

  baseURL: string = "https://cofeeshopproffer.herokuapp.com/api/landing/";

  constructor(private http:HttpClient) {}


  addCustomer(customer:ApiCustomer): Observable<any> {
    const httpoptions = {headers:new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Accept':'*/*'
      })};
      //const body = new HttpParams()
      //.set('name', 'foo')
      //.set('type', 'bar')
    const body=JSON.stringify(customer)
    console.log(body)
    return this.http.post(this.baseURL , body, httpoptions).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
}
//   Insert(data: ApiCustomer): Observable<ApiCustomer> {
//     return this.http.post<ApiCustomer>('https://cofeeshopproffer.herokuapp.com/api/landing/', data, {
//       headers : new HttpHeaders ({
//         'Content-Type':'application/json',
//         'Accept':'*/*'
//       })

//     });
// }

  // nsertPost(post:ApiCustomer):Observable<ApiCustomer>{
  //   const httpoptions={headers:new HttpHeaders({
  //   'Content-Type':'application/json',
  //   'Accept':'*/*'
  //   })};
  //   return this.http.post<ApiCustomer>('https://cofeeshopproffer.herokuapp.com/api/landing/',httpoptions);
  //   }

}