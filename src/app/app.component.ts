import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
// import { NavController } from 'ionic-angular/navigation/nav-controller';

import { StorageProvider } from '../providers/storage/storage';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = LoginPage;
  storages: any;
  listaAuth;
  chaveAuth: string = "Auth"; 
  listaDespesas = {};
  
  
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public googlePlus: GooglePlus
    // public navCtrl: NavController
  ) {

    this.googlePlus.trySilentLogin({}).then(
      () => this.rootPage = PrincipalPage
    ).catch(err => console.error(err));
    
    
    platform.ready().then(() => {
      
      // this.storage.ready().then(() => {
      //   this.storage.get("Auth").then((registros) => {
      //     this.listaAuth = registros;
      //     console.log(this.listaAuth.isLoggedIn);
      //     if(this.listaAuth.isLoggedIn){
      //       this.rootPage = PrincipalPage;
      //     }
      //     if(this.listaAuth.isLoggedIn == undefined){
      //       this.rootPage = LoginPage;
      //     }
         
      //   })
      // })


      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }
}
