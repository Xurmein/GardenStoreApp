import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { User }  from '../admin-model';
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login : FormGroup
  user : User
  private admin = [];

  constructor(
   
    private authService : AuthService,
    private fb : FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }


  onLogin(): void {
    this.admin.push(this.login)
    this.authService.login(this.admin[0].value, this.admin[1].value).subscribe(
      User => localStorage.setItem('token', User.token)
    )
  }
}
