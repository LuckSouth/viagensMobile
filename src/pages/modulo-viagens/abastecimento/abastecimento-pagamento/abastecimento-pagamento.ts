import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';
import { RecuperarDadosProvider } from '../../../../providers/recuperar-dados/recuperar-dados';

@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {

  searchQuery: string = '';
  items: string[];
  a;
  constructor(public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public recuperarDados: RecuperarDadosProvider) {
      
      this.recuperarDados.formasPagamento('nome', 'produtos');      

  } 

  initializeItems() {
    this.items = this.storageProvider.listarFornecedores(); 
    this.a = this.items;
  }

  getItems(ev: any) { 
    this.initializeItems(); 
    let val = ev.target.value; 
    if (val && val.trim() != '') {
      this.a = this.a.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /* Recupera a data atual e converte para o tipo string */

  Data: string = new Date().toISOString();

  /* Verifica se o usuário inseriu os dados a todos os campos */

  valida() {
    this.storageProvider.abastecimento.dataAbastecimento = this.Data;
    
    if (this.storageProvider.abastecimento.tipoAbastecimento.length < 3 || this.storageProvider.abastecimento.postoAbastecimento == "" || this.storageProvider.abastecimento.tipoPagmtAbastecimento == "" || this.storageProvider.abastecimento.dataAbastecimento == "" || this.storageProvider.abastecimento.precoAbastecimento == "" ) {
      return false;
    } else {
      return true;
    }
    
  }

}
