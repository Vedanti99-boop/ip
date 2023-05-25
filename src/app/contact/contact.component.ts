import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  getContEmail: signUp[] | undefined;
  myId: undefined | signUp;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getContEmail().subscribe((data) => {
      this.getContEmail = data;
    });

    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore)[0];
    this.myId = userData?.id || '';
  }
}
