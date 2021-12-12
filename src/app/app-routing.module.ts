import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateCommentComponent } from './add-update-comment/add-update-comment.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ArticleAddUpdateComponent } from './article-add-update/article-add-update.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:ArticleComponent},
  {path:'articles',component:ArticleComponent},
  {path:'article-detail',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'users',component:UsersComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'update/:id',component:UpdateusersComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'article-list',component:ArticleListComponent},
  {path:'article-addUpdate',component:ArticleAddUpdateComponent},
  {path:'comment-list',component:CommentListComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-update-comments',component:AddUpdateCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
