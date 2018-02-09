import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeralDadosViagemPage } from '../geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../geral-dados-motorista/geral-dados-motorista';



@IonicPage()
@Component({
  selector: 'geral-page',
  templateUrl: 'geral-page.html',
})
export class GeralPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams ) {
  }

  geralDadosViagem = GeralDadosViagemPage;
  geralDadosMotorista = GeralDadosMotoristaPage;
}