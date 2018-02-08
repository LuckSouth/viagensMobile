import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';

import { PrincipalPage } from '../principal/principal/principal';
import { StorageProvider } from '../../providers/storage/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {


  public itens: Array<any> = [];


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient
  ) { }



  //enviar dados pro php
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.160/";



  enviar(login: string, senha: string): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "login": login,
        "senha": senha
      },
      url: any = this.baseURI + "login.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }







  load(): void {
    this.http
      .get('http://localhost/login.php')
      .subscribe((data: any) => {
        console.dir(data);
        //  console.dir(data.senha)
        this.itens = data;
        console.log(this.itens[0].senha)
      },
      (error: any) => {
        console.dir(error);
      });
  }

  ionViewWillEnter(): void {
    this.load();
  }



}

