import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;

  registerUserData = {
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  };

  lang;
  language = {
    signUpToNorthwind: 'Sign Up to NorthWind',
    alreadyMember: 'Already a member?',
    login: 'Log in',
    createAccount: 'Create an account',
    leaveEmpty: 'You can not leave it empty!',
    firstName: 'First Name',
    lastName: 'Last Name',
    userName: 'Username',
    password: 'Password'
  }

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';

    if (this.lang === 'en') {
      this.language = {
        signUpToNorthwind: 'Sign Up to NorthWind',
        alreadyMember: 'Already a member?',
        login: 'Log in',
        createAccount: 'Create an account',
        leaveEmpty: 'You can not leave it empty!',
        firstName: 'First Name',
        lastName: 'Last Name',
        userName: 'Username',
        password: 'Password'
      }
    }
    else {
      this.language = {
        signUpToNorthwind: 'NorthWinde Üye ol',
        alreadyMember: 'Zaten üye misiniz?',
        login: 'Giriş yap',
        createAccount: 'Kayıt ol',
        leaveEmpty: 'Boş bırakamazsın!',
        firstName: 'İsim',
        lastName: 'Soyisim',
        userName: 'Kullanıcı Adı',
        password: 'Şifre'
      }
    }
  }

  registerUser() {
    this.registerService.registerServer(this.firstName, this.lastName, this.userName, this.password).subscribe(
      result => { localStorage.setItem('register_token', result.toString()) }
    );
    console.log(localStorage.getItem('register_token'));

  }

}
