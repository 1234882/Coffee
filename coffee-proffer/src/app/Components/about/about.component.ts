import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  about:any[] | undefined;


  constructor(aboutservice:AboutService) {
    aboutservice.getabout().subscribe(
      res=>{
      console.log(res);
      this.about=res;
    },
    err=>{
      console.log(err);
    }
    )}

 

}
