import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  success;
  text;
  constructor(
    private router: Router, private authService: AuthService
  ) { }


  ngOnInit() {
  }
  // login($event) {
  //   if (this.username === "admin" && this.password === "admin@123") {
  //     console.log("Login Success");
  //     this.success = true;
  //     this.text = "Successfully Logged In!!";
  //     this.router.navigate(['dashboard']);
  //   }
  //   else {
  //     this.success = false;
  //     this.text = "Invalid Credentials!!";
  //   }}

  async login() {
    const isValid: Boolean = await this.authService.login(this.username, this.password);
    if (isValid) {
      this.text = "Login Success";
      this.router.navigate(["dashboard"]);
    }
    else {
      this.success = false;
      this.text = "Invalid  Credentials!";
    }
  }
}

