import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LeaveComponent } from './leave/leave.component';
import { ServicesComponent } from './services/services.component';
import { SelfServiceComponent } from './self-service/self-service.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
    canActivate: [AuthGuard],
  },
  {
    component: SignupComponent,
    path: 'signup',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: LeaveComponent,
    path: 'leave',
  },
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: MyProfileComponent,
    path: 'my-profile',
  },
  {
    component: ServicesComponent,
    path: 'services',
  },
  {
    component: SelfServiceComponent,
    path: 'self-service',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
