import { Component, OnInit } from '@angular/core';

import static_nav from './static_nav.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'json-file-read-angular';
  public nav: {home:String, products:String, gallery:String, aboutus:String, blog:String, contactus:String}[] = static_nav;

  constructor() { }

  ngOnInit(): void {
  }

}
