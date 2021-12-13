import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // base url for article api
  baseUrl="http://localhost:3000/v1/article";
  constructor(private http:HttpClient) { }
  
  // to get article by id
  getArticleById(data:any){
    return this.http.get(`${this.baseUrl}/arti/${data}`);
  }

  // to get list of all articles
  getListOfArticles(){
    return this.http.get(`${this.baseUrl}/articles`);
  }

  // get Searched articles
  getSearchedArticles(data:any){
    return this.http.get(`${this.baseUrl}/articlesSearched/${data}`);
  }

  // get article by category
  getArticlesByCategory(data:any){
    return this.http.get(`${this.baseUrl}/${data}`);
  } 

  // to update an article
  updateArticle(id:any,data:any){
    return this.http.patch(`${this.baseUrl}/${id}`,data);
  }

  // to soft delete an article
  deleteArticle(data:any){
    return this.http.patch(`${this.baseUrl}/deleteArticle/${data}`,"");
  }

  // to create an article
  createArticle(data:any){
    return this.http.post(`${this.baseUrl}/createArticle`,data);
  }
  
}
