import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'arla-posto-page',
  templateUrl: 'arla-posto.html',
})
export class ArlaPostoPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
  }
  valida() {

    if (this.storageProvider.arla.precoArla == "" || this.storageProvider.arla.pagArla == "" || this.storageProvider.arla.tipoArla == "" || this.storageProvider.arla.dataArla == "" || this.storageProvider.arla.postoArla == "") {
    } else {
      return true;
    }
  }
}
