import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //base url for article api
  baseUrl="http://localhost:3000/v1/article";
  constructor(private http:HttpClient) { }

  // to get list of all articles
  getListOfArticles(){
    return this.http.get(`${this.baseUrl}/articles`);
  }
  
}
