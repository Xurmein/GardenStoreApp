import { Component, OnInit } from '@angular/core';
import { User }  from '../admin-model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  admin = User;

  constructor() { }

  ngOnInit() {
  }

}
