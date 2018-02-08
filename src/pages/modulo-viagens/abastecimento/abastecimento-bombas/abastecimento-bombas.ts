import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-abastecimento-bombas',
  templateUrl: 'abastecimento-bombas.html',
})
export class AbastecimentoBombasPage {
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public storageProvider: StorageProvider) {
  }

 
  valida() { 
    
        if ( this.storageProvider.abastecimento.litrosBomb1 == "" || this.storageProvider.abastecimento.odometro == "" || this.storageProvider.abastecimento.litrosBomb2 == "" ){
          return false;
        }else{
          return true;
        }
      }

  
}
