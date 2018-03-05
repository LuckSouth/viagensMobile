import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { StorageProvider } from '../../providers/storage/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosProvider } from "../../providers/dados/dados";
import { AlertController } from 'ionic-angular';
import { ViagensPage } from '../modulo-viagens/viagens/viagens';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  private films: any;
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
  senha = 'a';
  
  logado(usuario, senha) {   

    return new Promise((resolve, reject) => {
    
      this.dados.login(usuario, senha)
      this.a = this.dados.senha
      if (this.a[0].senha == this.senha) {
        this.viagensPage()
      }
      if(this.a[0].senha != this.senha){
        console.log('Sou um merda')
      }
    })
  }

  viagensPage() {
    this.navCtrl.push(ViagensPage);
  }
  //enviar dados pro php
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.152/";
  usuario; 

  a: any[] = [""] 


}

