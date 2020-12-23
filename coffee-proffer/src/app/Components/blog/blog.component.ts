import { Comments } from './../../classes/comments';
import { blogApiService } from './../../services/blogapi.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _blogApiService: blogApiService) { }


  listarticles:Comments[] | undefined;
  ngOnInit() {

    this._blogApiService.getcomments()
    .subscribe
    (
      data=>
      {
        this.listarticles = data;

      }


    );


  }

}
