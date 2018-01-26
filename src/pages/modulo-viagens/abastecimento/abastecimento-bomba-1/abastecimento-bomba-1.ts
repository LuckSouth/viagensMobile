import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
  }

  valida() {

    if (this.storageProvider.abastecimento.precoBomb1 == "" || this.storageProvider.abastecimento.litrosBomb1 == "") {
      return false;
    }else{
      return true;
    }
  }

}
