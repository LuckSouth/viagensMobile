import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';
import { RecuperarDadosProvider } from '../../../../providers/recuperar-dados/recuperar-dados';

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})

export class ReceitasPage {

  searchQuery: string = '';
  itemsFornecedores: string[];
  itemsProdutos: string[];
  itemsFormasPagamento: string[];
  fornecedores;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public recuperarDados: RecuperarDadosProvider) {

    this.recuperarDados.fornecedores('nome', 'produtos');
    this.recuperarDados.produtos('nome', 'produtos');
    this.recuperarDados.formasPagamento('nome', 'produtos');

    this.itemsProdutos = this.storageProvider.listarProdutos();
    this.itemsFormasPagamento = this.storageProvider.listarFormasPagameno();
    // var a = this.itemsProdutos.nome
    this.initializeItems();

  }

  //Filter searchbar
  initializeItems() {
    this.itemsFornecedores = this.storageProvider.listarFornecedores();
    this.fornecedores = this.itemsFornecedores;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.fornecedores = this.fornecedores.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
    this.dados.despesa(
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
