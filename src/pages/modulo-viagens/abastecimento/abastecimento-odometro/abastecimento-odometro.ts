import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-abastecimento-odometro',
  templateUrl: 'abastecimento-odometro.html',
})
export class AbastecimentoOdometroPage {

  constructor(public navCtrl: NavController,
    public storageProvider: StorageProvider) {
  }

  valida() {
    
        if (this.storageProvider.abastecimento.odometro == "") {
          return false;
        }else{
          return true;
        }
        
    
      }
}
