import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPage } from '../register/register';

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
  constructor(public navCtrl: NavController) {}

}
