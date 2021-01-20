import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiCustomerService } from 'src/app/services/api-customer.service';
import { ApiCustomer} from 'src/app/interfaces/api-customer'
import { Router } from '@angular/router';
import { data } from 'jquery';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  customer: any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.customer={
      name:"ahmed",
      phone:3337,
      type:"Retail"
    }
    }

  onSubmit(){
    const httpoptions={headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'*/*'
    })};
    this.http.post('https://cofeeshopproffer.herokuapp.com/api/landing/', httpoptions, this.customer).subscribe(
      // (data)=>{console.log("result",this.customer)}
    )
    // console.warn(data);
    //this.ApiCustomer.nsertPost(this.customer).subscribe(
      //(data)=>console.warn(data),
      //(err)=>console.log(err))
  }
}
