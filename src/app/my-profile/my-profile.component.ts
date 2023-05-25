import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  userName = '';
  userEmail = '';
  getDetails: signUp[] | undefined;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getContEmail().subscribe((data) => {
      this.getDetails = data;
    });

    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore)[0];
    this.userName = userData?.name || '';
    this.userEmail = userData?.email || '';
  }
}
