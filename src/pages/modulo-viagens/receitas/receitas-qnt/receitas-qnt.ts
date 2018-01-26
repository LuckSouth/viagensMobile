import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';



@IonicPage()
@Component({
  selector: 'page-receitas-qnt',
  templateUrl: 'receitas-qnt.html',
})
export class ReceitasQntPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public storageProvider: StorageProvider) {

  }

  valida() {

    if (!(this.storageProvider.receitas.idUnidadeMedida == "cx" || this.storageProvider.receitas.idUnidadeMedida == undefined || this.storageProvider.receitas.idUnidadeMedida == "bd"))  { 
      if (this.storageProvider.receitas.idUnidadeMedida == "" || this.storageProvider.receitas.qntFaturado == "" || this.storageProvider.receitas.qntDescarregado == "" || this.storageProvider.receitas.valorUnitario == "") {
        return false
      } else {
        return true
      }

    }else{
      if (this.storageProvider.receitas.idUnidadeMedida == "" || this.storageProvider.receitas.idSubUnidade == "" && this.storageProvider.receitas.idSubUnidade == "" || this.storageProvider.receitas.qntFaturado == "" || this.storageProvider.receitas.qntDescarregado == "" || this.storageProvider.receitas.valorUnitario == "") {
        return false
      } else {
        return true
      }

    }


  }

  apareceBandeja() {
    if (this.storageProvider.receitas.idUnidadeMedida == 'bd') {
      return true;
    } else {
      return false;
    }
  }

  apareceCaixa() {
    if (this.storageProvider.receitas.idUnidadeMedida == 'cx') {
      return true;
    } else {
      return false;
    }
  }
}
