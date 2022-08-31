import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {

    this.wordpressService.getPost(this.wordpressBlogPostId).subscribe((response: WordpressBlogPost) => {
      console.log(response);
      this.wordpressBlogPost = response;
    });

  }

}
