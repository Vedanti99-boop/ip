import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userName: string = '';
  userId: undefined | signUp;
  menuType: string = 'default';
  constructor(private route: Router) {}

  ngOnInit(): void {
    //helps to toggle the navbar with the help of url.includes and displays name
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user') && val.url.includes('home')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.userName = userData?.name || '';
          this.menuType = 'home';
        } else if (
          localStorage.getItem('user') &&
          val.url.includes('contact')
        ) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.userName = userData?.name || '';
          this.menuType = 'contact';
        } else if (
          localStorage.getItem('user') &&
          val.url.includes('my-profile')
        ) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.userName = userData?.name || '';
          this.menuType = 'my-profile';
        } else if (
          localStorage.getItem('user') &&
          val.url.includes('services')
        ) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.userName = userData?.name || '';
          this.menuType = 'services';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['signup']);
  }
}
