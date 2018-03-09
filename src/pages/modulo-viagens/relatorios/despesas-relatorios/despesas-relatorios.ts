import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-despesas-relatorios',
  templateUrl: 'despesas-relatorios.html',
})
export class DespesasRelatoriosPage {
  tamanho;  
  storages: any[];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storageProvider: StorageProvider) { 
  }

    ionViewDidEnter() { 
      console.log(this.storages);
      this.storages = this.storageProvider.listarDescricaoDespesa();
      this.tamanho = this.storageProvider.tamanhoArla()
      
    }
    
}
