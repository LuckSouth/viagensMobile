import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ArlaPagPage } from '../arla-pag/arla-pag';
import { ArlaPostoPage } from '../arla-posto/arla-posto';
import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';


@IonicPage()
@Component({
  selector: 'page-rotas-arla',
  templateUrl: 'rotas-arla.html',
})
export class RotasArlaPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(ArlaPagPage) arlaPagPage: ArlaPagPage;
  @ViewChild(ArlaPostoPage) arlaPostoPage: ArlaPostoPage;


  contador: number = 1;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider) {

  }




  salvar() {
    this.dados.arla(
      this.arlaPagPage.storageProvider.arla.motorista,
      this.arlaPagPage.storageProvider.arla.litrosArla,
      this.arlaPagPage.storageProvider.arla.litrosPrecoArla,
      this.arlaPagPage.storageProvider.arla.selectArla,
      this.arlaPagPage.storageProvider.arla.tipoArla,
      this.arlaPagPage.storageProvider.arla.postoArla,
      this.arlaPagPage.storageProvider.arla.dataArla,
      this.arlaPagPage.storageProvider.arla.km,

    )
    console.log("salvar chamado")

  }
  
  ngAfterViewInit() {
    this.slides.lockSwipes(true);

    if (this.contador == 1) {
      return this.arlaPagPage.valida();
    }

    if (this.contador == 2) {
      return this.arlaPostoPage.valida();
    }
  }


  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
    }
    this.slides.lockSwipes(true);
  }

  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 3) {
      this.salvar()
      //Armazenar no Storage
      // this.storageProvider.adicionarArla();

      let toast = this.toastCtrl.create({
        message: 'Arla32 adicionada com sucesso',
        duration: 2000
      });
      toast.present();

      this.navCtrl.pop();
    }
    this.slides.lockSwipes(true);
  }

}
