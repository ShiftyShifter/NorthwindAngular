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

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registerService.registerServer(this.firstName, this.lastName, this.userName, this.password).subscribe(
      result => { localStorage.setItem('register_token', result.toString()) }
    );
    console.log(localStorage.getItem('register_token'));
  }

}
