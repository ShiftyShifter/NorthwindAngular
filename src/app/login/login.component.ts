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

  lang;
  language = {
    loginToNorthwind: 'Log in to NorthWind',
    dontHaveAccount: "Don't you have an account?",
    login: 'Log in',
    singUp: 'Sing up',
    userName: 'Username',
    password: 'Password'
  }

  constructor(private loginService: LoginService) {
    localStorage.setItem('id_token', 'empty');
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';

    if (this.lang === 'en') {
      this.language = {
        loginToNorthwind: 'Log in to NorthWind',
        dontHaveAccount: "Don't you have an account?",
        login: 'Log in',
        singUp: 'Sing up',
        userName: 'Username',
        password: 'Password'
      }
    }
    else {
      this.language = {
        loginToNorthwind: "Northwind'e giriş yap",
        dontHaveAccount: "Hesabın yok mu?",
        login: 'Giriş yap',
        singUp: 'Kayıt ol',
        userName: 'Kullanıcı Adı',
        password: 'Şifre'
      }
    }

  }
  loginUser() {
    this.loginService.loginServer(this.userName, this.password).subscribe(
      result => { localStorage.setItem('id_token', result.toString()) }
    );
    setTimeout(() => {
      if (localStorage.getItem('id_token') != 'empty') {
        localStorage.setItem('ifLogged', 'true');
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
      else if (localStorage.getItem('id_token') === 'empty') {
        localStorage.setItem('ifLogged', 'false');
        alert('yanlış şifre girdiniz ya da bir hata oluştu!');
      }
    }, 1000);
    console.log(localStorage.getItem('id_token'));

  }
}
