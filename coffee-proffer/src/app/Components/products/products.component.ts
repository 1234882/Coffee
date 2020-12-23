import { Component} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

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
