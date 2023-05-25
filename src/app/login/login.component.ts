import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authError: String = '';

  constructor(private user: UserService, private router: Router) {}

  login(data: signUp) {
    this.user.userLogin(data);
    this.user.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'EMAIL OR PASSWORD IS NOT CORRECT TRY AGAIN!';
      }
    });
  }
}
