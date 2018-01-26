import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-receita-fornecedor',
  templateUrl: 'receita-fornecedor.html',
})
export class ReceitasFornecedorPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storageProvider: StorageProvider) {

  }
 
valida() {
    if (this.storageProvider.receitas.fornecedorOrigem == "" || this.storageProvider.receitas.fornecedorDestino == "" || this.storageProvider.receitas.produto == "" || this.storageProvider.receitas.tipoPagmt == "") {
      return false;
    } else {
      return true;
    }
  }
}
