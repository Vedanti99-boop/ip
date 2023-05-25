import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { fa-right-from-bracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {
  faHouse = faHouse;
  faAddressBook = faAddressBook;
  faUser = faUser;
  // iconColor = '#9ba4b5';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['signup']);
  }

  // changeColor() {
  //   this.iconColor = 'white';
  // }
}
