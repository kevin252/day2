import { PostsService } from './posts.service';
import { Post } from './post.interface';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	animals = [ 'dog', 'fish', 'cat', 'rabbit' ];
	show = false;
	credit = 1111222233334444;
	name = 'Kevin';
	posts: Post[];
	count: number;

	constructor(private postService: PostsService) {
		postService.getPosts().subscribe((content) => {
			this.posts = content;
		});
	}
	change() {
		this.show = !this.show;
	}

	eventKeyPress(event) {
		if (event.keyCode === 13) {
			this.name = event.target.value;
		}
	}

	removePost(id: number) {
		this.posts = this.postService.removePost(this.posts, id);
	}
}
