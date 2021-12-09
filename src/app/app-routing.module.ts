import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:ArticleComponent},
  {path:'articles',component:ArticleComponent},
  {path:'article-detail',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'comment-list',component:CommentListComponent},
  {path:'edit-comments',component:EditCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
