import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  @Input() post!: IPost;

  constructor() {}

  ngOnInit(): void {}
}
