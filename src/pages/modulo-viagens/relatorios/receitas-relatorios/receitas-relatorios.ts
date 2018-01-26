import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-receitas-relatorios',
  templateUrl: 'receitas-relatorios.html',
})
export class ReceitasRelatoriosPage {
  tamanho;
  storages: any[];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
      // this.storages = this.storageProvider.listar();


  }

  ionViewDidEnter() {
    this.tamanho = this.storageProvider.tamanhoArla()    
    this.storages = this.storageProvider.listarReceitas();
  }

 

}
