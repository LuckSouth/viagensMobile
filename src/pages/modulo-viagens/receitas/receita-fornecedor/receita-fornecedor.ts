import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { RecuperarDadosProvider } from '../../../../providers/recuperar-dados/recuperar-dados';


@IonicPage()
@Component({
  selector: 'page-receita-fornecedor',
  templateUrl: 'receita-fornecedor.html',
})
export class ReceitasFornecedorPage {

  searchQuery: string = '';
  items: string[];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider,
    public recuperarDados: RecuperarDadosProvider ) {

      this.recuperarDados.dadosFornecedor();
      this.initializeItems();

  }

  initializeItems() {
    this.items = this.storageProvider.listarFornecedores();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    let a = this.items[0];
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }
  }


  valida() {
    if (this.storageProvider.receitas.fornecedorOrigem == "" || this.storageProvider.receitas.fornecedorDestino == "" || this.storageProvider.receitas.produto == "" || this.storageProvider.receitas.tipoPagmt == "") {
      return false;
    } else {
      return true;
    }
  }
}
