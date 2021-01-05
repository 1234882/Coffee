import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIcustomers } from 'src/app/interfaces/apicustomers';
import { APIcustomerService } from 'src/app/services/apicustomer.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  customer:any | undefined

  constructor(private _APIcustService:APIcustomerService, private _router:Router) { 

  }

ngOnInit(): void {


  this.customer={
    name:"",
    phone:0,
    type:"",
    
  }
}

AddCustomer(){
  this._APIcustService.AddCutomer(this.customer).subscribe(
    (data)=>this._router.navigateByUrl('/landing'),
    // (err)=>console.log(err)
  )

} 
 }