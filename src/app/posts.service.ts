import { postsMock } from './posts.mock';
import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
	postUrl = 'https://jsonplaceholder.typicode.com/posts';
	constructor(private httpClient: HttpClient) {}

	getPosts() {
		return this.httpClient.get<Post[]>(this.postUrl);
	}

	removePost(posts: Post[], id: number) {
		return (posts = posts.filter((post) => post.id !== id));
	}
}
