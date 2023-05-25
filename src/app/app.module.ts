import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryComponent } from './salary/salary.component';
import { LeaveComponent } from './leave/leave.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { SelfServiceComponent } from './self-service/self-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryComponent,
    LeaveComponent,
    DetailsComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    SideNavbarComponent,
    MyProfileComponent,
    ServicesComponent,
    SelfServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
