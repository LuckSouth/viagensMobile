import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados'; 

@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})


export class DespesasPage {
  data: void;
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;  
  searchQuery: string = '';
  itemsFornecedores: string[]; 
  itemsFormasPagamento: string[];
  fornecedores;    
  itemsDescricaoDespesa: string[];  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider) {  
      this.itemsDescricaoDespesa = this.storageProvider.listarDescricaoDespesa(); 
  }

  /* Recupera a data atual e converte para o tipo string */

  Data: string = new Date().toISOString(); 
 
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
    this.dados.despesas(
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
