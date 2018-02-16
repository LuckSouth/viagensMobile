import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

import { ViagensPage } from '../../modulo-viagens/viagens/viagens';
import { StorageProvider } from '../../../providers/storage/storage'; 


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
      public storageProvider: StorageProvider 
    ) {

  }


  linkViagens() {
    // this.storageProvider.login.isLoggedIn = false;
    // this.storageProvider.atualizar("Auth");
    this.navCtrl.push(ViagensPage);
  }
}
