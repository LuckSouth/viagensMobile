import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-abastecimento-relatorios',
  templateUrl: 'abastecimento-relatorios.html',
})
export class AbastecimentoRelatoriosPage {
  tamanho;  
  storages: any[];
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
      // this.storages = this.storageProvider.listar();

  }

  ionViewDidEnter() {
    this.storages = this.storageProvider.listar();
    this.tamanho = this.storageProvider.tamanhoArla()
    
  }

}
