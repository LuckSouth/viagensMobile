import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-abastecimento-foto-odometro',
  templateUrl: 'abastecimento-foto-odometro.html',
})
export class AbastecimentoFotoOdometroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoFotoOdometroPage');
  }
} 
