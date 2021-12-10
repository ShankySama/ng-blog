import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddUpdateComponent } from './article-add-update/article-add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ArticleListComponent,
    ArticleAddUpdateComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
