import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-arla-relatorios',
  templateUrl: 'arla-relatorios.html',
})


export class ArlaRelatoriosPage {
  
  tamanho;
  storages: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
    // this.storages = this.storageProvider.listar();

  }

  ionViewDidEnter() {
    this.storages = this.storageProvider.listarArla();
    this.tamanho = this.storageProvider.tamanhoArla()
  }

}
