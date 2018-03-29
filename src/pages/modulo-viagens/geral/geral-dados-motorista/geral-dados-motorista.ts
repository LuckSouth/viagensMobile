import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { RecuperarDadosProvider } from "../../../../providers/recuperar-dados/recuperar-dados";
import { StorageProvider } from "../../../../providers/storage/storage";
@IonicPage()
@Component({
  selector: 'geral-dados-motorista',
  templateUrl: 'geral-dados-motorista.html',
})
export class GeralDadosMotoristaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public recuperarDados: RecuperarDadosProvider, public storageProvider: StorageProvider) {
    this.recuperarDados.geral()
    this.dados = this.storageProvider.listaGeral
 

    this.nomeMotorista = this.dados[0].nomeMotorista
    this.idViagem = this.dados[0].idViagem
  }

  dados: any[] = [];
  nomeMotorista
  idViagem;
  dataSaida
  kmSaida
  percentualComissaoGerencial
  valorValeViagem

  ionViewDidEnter(){
  
  }
 
}
