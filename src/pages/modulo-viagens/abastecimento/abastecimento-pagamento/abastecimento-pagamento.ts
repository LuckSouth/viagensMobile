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

  /* Recupera a data atual e converte para o tipo string */

  Data: string = new Date().toISOString();

  /* Verifica se o usuário inseriu os dados a todos os campos */

  valida() {
    this.storageProvider.abastecimento.dataAbastecimento = this.Data;
    
    if (this.storageProvider.abastecimento.tipoAbastecimento.length < 3 || this.storageProvider.abastecimento.postoAbastecimento == "" || this.storageProvider.abastecimento.tipoPagmtAbastecimento == "" || this.storageProvider.abastecimento.dataAbastecimento == ""  ) {
      return false;
    } else {
      return true;
    }
    
  }

}
