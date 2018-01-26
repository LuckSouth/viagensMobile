import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { PrincipalPage } from '../principal/principal/principal';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  storages: any[];
  listaAuth: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
  }

  ionViewDidEnter() {
    // this.storages = this.storageProvider.listarAuth();
    this.navCtrl.push(PrincipalPage)

  }

  mudar() {
    this.navCtrl.push(PrincipalPage)
  }

}
