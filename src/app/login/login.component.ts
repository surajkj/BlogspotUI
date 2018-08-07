import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  
  loginUser(event){
    event.preventDefault();
    console.log(event)
    const target = event.target
    const username = target.value('username')
    const password = target.value('password')

    this.Auth.getUserDetails(username, password)

    console.log("Username "+username +" Password "+password);
  }
}
