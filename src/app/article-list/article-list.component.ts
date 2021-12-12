import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  // to store list of artciles
  articles:any;
  constructor(private articleService:ArticleService) { }

  //function for calling article service to get list of articles
  getArticlesList(){
    this.articleService.getListOfArticles().subscribe((result)=>{
      this.articles=result;
      console.warn(this.articles);
    })
  }
  ngOnInit(){
    this.getArticlesList();
  }

}
