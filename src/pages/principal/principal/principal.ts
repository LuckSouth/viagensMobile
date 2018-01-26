import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ViagensPage } from '../../modulo-viagens/viagens/viagens';
import { StorageProvider } from '../../../providers/storage/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../../login/login';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  
  storages
  listaAuth: any[];

  name: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;


  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public storageProvider: StorageProvider,
      private googlePlus: GooglePlus
    ) {

  }


   ionViewDidEnter() {
   
  }



  linkViagens() {
    // this.storageProvider.login.isLoggedIn = false;
    // this.storageProvider.atualizar("Auth");
    this.navCtrl.push(ViagensPage);
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
