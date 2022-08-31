import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WordpressBlogPostsComponent } from './wordpress-blog-posts/wordpress-blog-posts.component';

const routes: Routes = [
  { path: 'wordpress-blog-posts/:id', component: WordpressBlogPostsComponent },
  { path: 'wordpress-blog-posts', component: WordpressBlogPostsComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
