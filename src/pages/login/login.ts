import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { StorageProvider } from '../../providers/storage/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosProvider } from "../../providers/dados/dados";
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  data: void;


  public itens: Array<any> = [];


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient,
    public dados: DadosProvider,
    public alert: AlertController
  ) {

  }

  //enviar dados pro php
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.152/";
  usuario;
  senha;

  enviar(usuario, senha) {
    console.log(this.dados.login(this.usuario, this.senha));

  }



  alerta(titulo, subTitulo) {
    let alert = this.alert.create({
      title: titulo,
      subTitle: subTitulo,
      buttons: ['OK']
    });
    alert.present();
  }

}

