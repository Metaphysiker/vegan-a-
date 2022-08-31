import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WordpressService } from '../wordpress.service';
import { WordpressBlogPost } from '../wordpress-blog-post';

@Component({
  selector: 'app-wordpress-blog-post',
  templateUrl: './wordpress-blog-post.component.html',
  styleUrls: ['./wordpress-blog-post.component.sass']
})
export class WordpressBlogPostComponent implements OnInit {

  @Input() wordpressBlogPostId: number = 79371;

  wordpressBlogPost: WordpressBlogPost | undefined = undefined;

  constructor(private wordpressService: WordpressService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.wordpressBlogPostId = params['id'];
    });

    this.wordpressService.getPost(this.wordpressBlogPostId).subscribe((response: WordpressBlogPost) => {
      console.log(response);
      this.wordpressBlogPost = response;
    });

  }

}
