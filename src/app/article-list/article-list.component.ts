import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  // to store list of artciles
  articles:any;
  constructor(private ngbModal:NgbModal,private articleService:ArticleService) { }

  // function for calling article service to get list of articles
  getArticlesList(){
    this.articleService.getListOfArticles().subscribe((result)=>{
      this.articles=result;
    })
  }

  // fucntion to open modal for delete
  deleteArticle(data:any){
    this.ngbModal.open(data)
  }

  // funciton to delte 
  delete(data:any){
    this.articleService.deleteArticle(data).subscribe((result)=>{
      // to do
      // for refreshing the arrayArticles list
    })
  }

  ngOnInit(){
    // calliing articles list
    this.getArticlesList();
  }
  
}
