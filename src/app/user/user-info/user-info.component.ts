import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';
import { IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser;
  posts!: IPost[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public getPostsByUserId(id: number) {
    this.userService.getPostsByUserId(id).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
