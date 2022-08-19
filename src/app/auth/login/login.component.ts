import { DxValidationGroupComponent } from 'devextreme-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginParams } from '@app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginValidateGroup', { static: true }) loginValidateGroup:
    | DxValidationGroupComponent
    | undefined;

  loginData: LoginParams = {
    username: 'admin',
    password: '1q2w3E*',
    rememberMe: true,
  };

  constructor(
  ) {
  }

  ngOnInit(): void {}
}
