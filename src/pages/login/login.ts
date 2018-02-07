import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { HttpClient } from '@angular/common/http';

import { PrincipalPage } from '../principal/principal/principal';
import { StorageProvider } from '../../providers/storage/storage';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public items: Array<any> = [];


  //http://192.168.10.8/viagensMobile/login.php

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient
  ) { }



  ionViewWillEnter(): void {
    this.login();
  }

  login(): void {
    this.http
      .get('http://192.168.10.8/viagensMobile/login.php')
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
      (error: any) => {
        console.dir(error);
      });
  }


}

