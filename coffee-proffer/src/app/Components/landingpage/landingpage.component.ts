import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiCustomerService } from 'src/app/services/api-customer.service';
import { ApiCustomer} from 'src/app/interfaces/api-customer'
import { Router } from '@angular/router';
import { data } from 'jquery';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  //customer: any

  constructor() { }

  ngOnInit(): void {
    //this.customer={
      //name:"",
      //phone:0,
      //type:""

    }
  }
  //AddCustomers(){
    //this.ApiCustomer.nsertPost(this.customer).subscribe(
      //(data)=>this.router.navigateByUrl(''),
      //(err)=>console.log(err)

    //)
  //}


