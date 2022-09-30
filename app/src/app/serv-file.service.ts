import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServFileService {

  url="http://127.0.0.1:3500/data"

  constructor(private http: HttpClient) { }

  getAllData(){

    console.log(this.http.get(this.url));
    
    return this.http.get(this.url);
  }



}
