import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';
import { RecuperarDadosProvider } from '../../../../providers/recuperar-dados/recuperar-dados';

@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})


export class DespesasPage {
  
  despesa = "";
  motorista = "bino";
  despesas;
  searchQuery: string = '';
  itemsDespesa: string[];  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public recuperarDados: RecuperarDadosProvider) {

    this.recuperarDados.despesa('nome', 'produtos'); 

    this.itemsDespesa = this.storageProvider.listarDespesa(); 
    this.initializeItems();

  }

  //Filter searchbar
  initializeItems() {
    this.itemsDespesa = this.storageProvider.listarFornecedores();
    this.despesas = this.itemsDespesa;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.despesas = this.despesas.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /* Verifica se o usuário inseriu os dados a todos os campos */
  valida() {
    if (
    this.storageProvider.despesas.despesas == "" ||  
    this.storageProvider.despesas.valorDespesas == ""  ) {
      return false
    } else {
      return true
    }
  }


  /* Envia os dados para o provider para serem tratados */
  salvar() {
    this.dados.despesa(
    this.storageProvider.despesas.motorista, 
    this.storageProvider.despesas.despesas, 
    this.storageProvider.despesas.dataDespesas, 
    this.storageProvider.despesas.valorDespesas
  ); 
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Despesa adicionada com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
