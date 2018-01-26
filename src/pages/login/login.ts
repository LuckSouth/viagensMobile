import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage/es2015/storage';

import { PrincipalPage } from '../principal/principal/principal';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  name: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;
  listaAuth: any = ["123"];
  chaveAuth: string = "Auth"


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private googlePlus: GooglePlus,
    public storageProvider: StorageProvider,
    public storage: Storage,
  ) {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveAuth).then((registros) => {
        if (registros) {
          this.listaAuth = registros;
        } else {
          this.listaAuth = ["123"];
        }
      });

    });

  }

  ionViewDidEnter() {


  }

  login() {
    this.storageProvider.login.isLoggedIn = true;
    this.storageProvider.atualizar("Auth");

    this.googlePlus.login({})
      .then(res => {
        this.storageProvider.login.name = res.name;
        this.storageProvider.login.email = res.email;
        // this.familyName = res.familyName;
        // this.givenName = res.givenName;
        // this.userId = res.userId;
        // this.imageUrl = res.imageUrl;
      })
      .then(res => this.navCtrl.push(PrincipalPage))
      .catch(err => console.error(err))
  }


  logout() {
    
    this.storageProvider.login.isLoggedIn = false;
    this.storageProvider.atualizar("Auth");
    this.googlePlus.logout()
      .then(res => {
        this.storageProvider.login.name = "";
        this.storageProvider.login.email = "";
      })
      .then(res => this.navCtrl.push(LoginPage))
      .catch(err => console.error(err))
  }
}

