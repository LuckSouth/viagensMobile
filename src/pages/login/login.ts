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
  private baseURI: string = "http://192.168.10.160/";
  usuario;
  senha;

  a: any[] = ["6"]
  enviar(usuario, senha) {

    this.dados.login(usuario, senha)
    this.a = this.dados.senha

    try {
      if (this.a[0].senha == senha) {
        console.log('Ok')
      }
      if(this.a[0].senha != senha){
        this.alerta('Erro', 'Senha errada')
      }
    } catch (error) {
      console.log(this.a[0].senha)
    }


    if (this.a[0].senha == undefined || this.a[0].senha == null) {
      console.log('pera')
    }
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

