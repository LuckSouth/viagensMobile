import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

import { ViagensPage } from '../../modulo-viagens/viagens/viagens'; 


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
     constructor(public navCtrl: NavController,
      public navParams: NavParams
    ) {
  } 

  /* Retorna a pagina de viagens */
  linkViagens() {
    this.navCtrl.push(ViagensPage);
  }
}
