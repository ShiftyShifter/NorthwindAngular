import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./register.component.scss']
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private _auth: AuthServiceService) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
