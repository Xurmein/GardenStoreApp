import { Component, OnInit } from '@angular/core';
import { User }  from '../admin-model';
import {AuthService} from '../auth.service'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  admin = User;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService
  }

}
