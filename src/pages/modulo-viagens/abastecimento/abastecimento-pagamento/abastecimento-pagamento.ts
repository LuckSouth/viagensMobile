import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { RecuperarDadosProvider } from '../../../../providers/recuperar-dados/recuperar-dados';

@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {

  searchQuery: string = '';
  items: string[];
  itemsFormasPagamento: string[];
  a;
  constructor(public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public recuperarDados: RecuperarDadosProvider) {
         
      this.itemsFormasPagamento = this.storageProvider.listarFormasPagameno();
      this.recuperarDados.postos(); 
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
