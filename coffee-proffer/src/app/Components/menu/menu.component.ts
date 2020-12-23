import { Component} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  product:any[] | undefined;


  
  constructor(productservice:ProductsService) {
    productservice.getproduct().subscribe(
      res=>{
      console.log(res);
      this.product=res;
    },
    err=>{
      console.log(err);
    }
    )}

  

}





  

