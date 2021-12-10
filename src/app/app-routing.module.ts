import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateCommentComponent } from './add-update-comment/add-update-comment.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:ArticleComponent},
  {path:'articles',component:ArticleComponent},
  {path:'article-detail',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'comment-list',component:CommentListComponent},
  {path:'add-update-comments',component:AddUpdateCommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
