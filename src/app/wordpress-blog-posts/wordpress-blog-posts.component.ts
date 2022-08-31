import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { WordpressBlogPost } from '../wordpress-blog-post';

@Component({
  selector: 'app-wordpress-blog-posts',
  templateUrl: './wordpress-blog-posts.component.html',
  styleUrls: ['./wordpress-blog-posts.component.sass']
})
export class WordpressBlogPostsComponent implements OnInit {

  wordpressBlogPosts: WordpressBlogPost[] = [];

  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {

    this.wordpressService.getPosts().subscribe((response: WordpressBlogPost[]) => {
      console.log(response);
      this.wordpressBlogPosts = response;
    });

  }

}
