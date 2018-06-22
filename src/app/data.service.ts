import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { HttpRequest } from 'selenium-webdriver/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('http://localhost:8080/api/read');
  }

  createTodo(title, detail) {
    let body = new HttpParams().set("title", title).set("detail", detail);
    console.log("testdata " + body);
    return this.http.post('http://localhost:8080/api/create', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe();
  }

  DeleteIdList(id) {
    // let body = new HttpParams().set("id",id);
    console.log("from service: " + id)
    return this.http.delete('http://localhost:8080/api/delete/' + id).subscribe();

  }
  updateID(id, title, detail) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    console.log("updated from service: " + id + " title: " + title + " detail: " + detail);
    
    let body = {
      "title": title,
      "detail": detail
    }

    return this.http.put('http://localhost:8080/api/update/' + id, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
