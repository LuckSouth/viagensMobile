import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receitas-foto',
  templateUrl: 'receitas-foto.html',
})
export class ReceitasFotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
     public toastCtrl: ToastController) {
  }  
  showToast() {
      let toast = this.toastCtrl.create({
        message: 'Receita adicionada com sucesso',
        duration: 3000 
      });
      toast.present();
    }
}

