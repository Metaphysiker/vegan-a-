import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordpressBlogPostComponent } from './wordpress-blog-post/wordpress-blog-post.component';
import { WordpressBlogPostsComponent } from './wordpress-blog-posts/wordpress-blog-posts.component';
import { RemoveAttributeDirective } from './remove-attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    WordpressBlogPostComponent,
    WordpressBlogPostsComponent,
    RemoveAttributeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
