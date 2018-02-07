import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {


  constructor(public navCtrl: NavController,
    public storageProvider: StorageProvider) {

  }

  today = Date.now();
  

  valida() {

    if (this.storageProvider.abastecimento.tipoAbastecimento.length < 3 || this.storageProvider.abastecimento.postoAbastecimento == "" || this.storageProvider.abastecimento.dataAbastecimento == "" || this.storageProvider.abastecimento.tipoPagmtAbastecimento == "" || this.storageProvider.abastecimento.odometro == "" || this.storageProvider.abastecimento.precoBomb1 == "") {
      return false;
    } else {
      return true;
    }
    
  }

}
