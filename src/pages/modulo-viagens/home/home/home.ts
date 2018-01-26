import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../../../principal/principal/principal';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController) {

  }

  condicaoEntrar(email, senha){
    if (this.email == 'h' && this.senha == '123'){
      this.navCtrl.push(PrincipalPage);
    }else{
      alert("Email ou senha errados");
    }

    this.email = '';
    this.senha = '';
  }

}
