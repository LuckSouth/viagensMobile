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
  items: string[];
  a;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public recuperarDados: RecuperarDadosProvider) {

    this.recuperarDados.dadosFornecedor('nome', 'produtos');
    this.initializeItems();

  }

  initializeItems() {
    this.items = this.storageProvider.listarFornecedores();
    // this.items = [
    //   'zsda',
    //   'asdfdd'
    // ]
    this.a = this.items;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.a = this.a.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /* Verifica se o usuário inseriu os dados a todos os campos */
  valida() {
    if (this.storageProvider.receitas.fornecedorOrigem == "" || this.storageProvider.receitas.fornecedorDestino == "" || this.storageProvider.receitas.produto == "" || this.storageProvider.receitas.tipoPagmt == "") {
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
