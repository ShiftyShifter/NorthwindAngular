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

  constructor(private loginService: LoginService) { 
    localStorage.setItem('id_token', 'empty');
  }

  ngOnInit(): void {
    
  }
  loginUser(){
    this.loginService.loginServer(this.userName, this.password).subscribe(
      result => { localStorage.setItem('id_token', result.toString()) }
    );
    setTimeout(() => {
      if(localStorage.getItem('id_token') != 'empty'){
        localStorage.setItem('ifLogged', 'true');
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
      else if(localStorage.getItem('id_token') === 'empty'){
        localStorage.setItem('ifLogged', 'false');
        alert('yanlış şifre girdiniz ya da bir hata oluştu!');
      }
    }, 1000);
    console.log(localStorage.getItem('id_token'));
    
  }
}
