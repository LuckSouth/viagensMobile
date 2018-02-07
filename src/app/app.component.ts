import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { ScreenOrientation } from '@ionic-native/screen-orientation'; 

import { StorageProvider } from '../providers/storage/storage';  
import { Storage } from '@ionic/storage';  
import { PrincipalPage } from '../pages/principal/principal/principal';
import { LoginPage } from '../pages/login/login';

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
    public storage: Storage
  ) {


    platform.ready().then(() => {
      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide(); 
    });

  }
}
