import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.loginService.loginServer(this.userName, this.password).subscribe(
      result => { localStorage.setItem('id_token', result.toString()) }
    );
    console.log(localStorage.getItem('id_token'));
  }
}
