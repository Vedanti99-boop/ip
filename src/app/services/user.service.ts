import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  userId: undefined | signUp;

  constructor(private http: HttpClient, private router: Router) {}

  //logic without authguard
  // userSignUp(data: signUp) {
  //   return this.http.post('http://localhost:3000/user', data);
  // }

  //logic with authguard
  userSignUp(data: signUp) {
    return this.http
      .post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }
      });
  }

  //helps if you are already logged in then it doesnt show signup page u have to call it in oninit ts file
  reloadSeller() {
    if (localStorage.getItem('user')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['home']);
    }
  }

  userLogin(data: login) {
    this.http
      .get(
        `http://localhost:3000/user?email=${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length === 1) {
          this.isLoginError.emit(false);

          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        } else {
          console.error('login fail');
          this.isLoginError.emit(true);
        }
      });
  }

  getContEmail() {
    return this.http.get<signUp[]>('http://localhost:3000/user');
  }
}
