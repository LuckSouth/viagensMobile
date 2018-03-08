import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados'; 

@IonicPage()
@Component({
  selector: 'page-receitas', 
  templateUrl: 'receitas.html',
})

export class ReceitasPage { 
  data: void;
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;  
  searchQuery: string = '';
  itemsFornecedores: string[];
  itemsProdutos: string[];
  itemsFormasPagamento: string[];
  fornecedores;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider) {  
      this.itemsFornecedores = this.storageProvider.listarFornecedores();
      this.itemsProdutos = this.storageProvider.listarProdutos();
      this.itemsFormasPagamento = this.storageProvider.listarFormasPagamento(); 
  }
 
  /* Verifica se o usuário inseriu os dados a todos os campos */
  valida() {
    if (this.storageProvider.receitas.fornecedorDestino == "" || this.storageProvider.receitas.produto == "" || this.storageProvider.receitas.tipoPagmt == "") {
      return false;
    } else {
      return true;
    }
  }


  /* Envia os dados para o provider para serem tratados */
  salvar() {
    this.dados.despesas(
      this.storageProvider.receitas.fornecedorOrigem,
      this.storageProvider.receitas.fornecedorDestino,
      this.storageProvider.receitas.produto,
      this.storageProvider.receitas.tipoPagmt
    );
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Receita adicionada com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
