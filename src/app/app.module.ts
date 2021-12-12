import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddUpdateComponent } from './article-add-update/article-add-update.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddUpdateCommentComponent } from './add-update-comment/add-update-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    UpdateusersComponent,
    DashboardComponent,
    ArticleListComponent,
    ArticleAddUpdateComponent,
    CommentListComponent,
    DashboardComponent,
    AdduserComponent,
    SidenavComponent,
    AddUpdateCommentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
