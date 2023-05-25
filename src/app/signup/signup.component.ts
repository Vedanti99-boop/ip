import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  showLogin = false;
  authError: String = '';
  constructor(private user: UserService, private router: Router) {}
  ngOnInit(): void {
    this.user.reloadSeller();
  }

  //logic without authguard
  // userSignUp(data: signUp) {
  //   this.user.userSignUp(data).subscribe((result) => {
  //     if (result) {
  //       this.router.navigate(['home']);
  //     }
  //   });
  // }

  //with AuthGuard
  userSignUp(data: signUp) {
    this.user.userSignUp(data);
  }

  login(data: signUp) {
    this.user.userLogin(data);
    this.user.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'EMAIL OR PASSWORD IS NOT CORRECT TRY AGAIN!';
      }
    });
  }
  openSignUp() {
    this.showLogin = false;
  }
  openLogin() {
    this.showLogin = true;
  }
}
