import { Component, OnInit } from '@angular/core';
import { ApiPosts } from 'src/app/interfaces/api-posts';
import { ApiPostService } from 'src/app/services/api-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postsList:ApiPosts[] | undefined;

  constructor(private _apiPostserv:ApiPostService) { }

  ngOnInit(): void {
    this._apiPostserv.getPosts().subscribe(
      (data)=>this.postsList=data,
      (err)=>console.log(err)
    )
    console.log("Hello")

    console.log(this.postsList)
  }

}
