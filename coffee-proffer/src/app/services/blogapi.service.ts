import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable()

export class blogApiService
{

    constructor(private httpclient: HttpClient) { }

    getcomments(): Observable<any> {
        return this.httpclient.get("https://cofeeshopproffer.herokuapp.com/api/posts/")

    }

}
