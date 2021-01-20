import { Component, OnInit } from '@angular/core';
import { ApiCustomerService } from 'src/app/services/api-customer.service';
import { ApiCustomer} from 'src/app/interfaces/api-customer'
import { data } from 'jquery';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  customer:any

  constructor(private apiCustomer:ApiCustomerService) { }

  ngOnInit(): void {
    this.customer={
      name:"",
      phone:"",
      type:""

    }

}
addCustomer() {
  this.apiCustomer.addCustomer(this.customer).subscribe(data => {
      console.log(data),
      (err)=>console.log(err)

    })
}
}
//onSubmit(data){
  //const httpoptions={headers:new HttpHeaders({
    //'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    //'Accept':'*/*'
  //})};
  //this.http.post<any>('https://cofeeshopproffer.herokuapp.com/api/landing/', httpoptions, data).subscribe(
    //this.ApiCustomer.Insert(this.customer).subscribe(
    //(result)=>{console.warn("result",result)},
    //(err)=>console.log(err)
  //)
  //console.warn(data);

  //this.ApiCustomer.nsertPost(this.customer).subscribe(
    //(data)=>console.warn(data),
    //(err)=>console.log(err))

