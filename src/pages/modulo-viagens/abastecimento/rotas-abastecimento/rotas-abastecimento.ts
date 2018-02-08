import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico'
import { AbastecimentoPagamentoPage } from '../abastecimento-pagamento/abastecimento-pagamento'; 
import { AbastecimentoBombasPage } from '../abastecimento-bombas/abastecimento-bombas';
import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from "../../../../providers/dados/dados";
@IonicPage()
@Component({
  selector: 'page-rotas-abastecimento',
  templateUrl: 'rotas-abastecimento.html',
})
export class RotasAbastecimentoPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(AbastecimentoPagamentoPage) abastecimentoPagamento: AbastecimentoPagamentoPage;  
  @ViewChild(AbastecimentoBombasPage) abastecimentoBombas: AbastecimentoBombasPage;



  public contador: number = 1;
  cameraButton: boolean;
  fotoBomba1: string = "asda";
  fotoBomba2: string = "asda";
  fotoOdometro: string = "asdasd";
  permissao: boolean;
  litrosBomb1;
  abastecimento = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public foto: FotoServicoProvider,
    public storageProvider: StorageProvider,
    public dados: DadosProvider
  ) {

  }



  salvar() {
    this.dados.abastecimento(
      this.abastecimentoPagamento.storageProvider.abastecimento.motorista,
      this.abastecimentoPagamento.storageProvider.abastecimento.tipoAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.postoAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.dataAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.tipoPagmtAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.odometro,
      this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb1,
      this.abastecimentoPagamento.storageProvider.abastecimento.precoBomb1,
      this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb2,
      this.abastecimentoPagamento.storageProvider.abastecimento.precoBomb2,
    
    )
    console.log("salvar chamado")

  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);

    if (this.contador == 1) {
      return this.abastecimentoPagamento.valida();
    }
 
    if (this.contador == 2) {
      if (this.fotoOdometro != undefined) {
        return true;
      }
    } 

    if (this.contador == 5) {
      if (this.fotoBomba1 != undefined) {
        return true;
      }
    }

    if (this.contador == 6) {
      return this.abastecimentoBombas.valida();
    }

    if (this.contador == 7) {
      if (this.fotoBomba2 != undefined) {
        return true;
      }
    }

  }

  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();

    }

    if (this.contador == 3 || this.contador == 5 || this.contador == 7) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    this.slides.lockSwipes(true);
  }

  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 3) {
      this.salvar()
      // this.storageProvider.adicionarAbastecimento();

      let toast = this.toastCtrl.create({
        message: 'Abastecimento adicionada com sucesso',
        duration: 2000
      });
      toast.present();
      this.navCtrl.pop();

    }

    if (this.contador == 3 || this.contador == 5 ) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    this.slides.lockSwipes(true);
  }

  mostrar() {
    this.foto.getFoto('picture')
      .then(responses => {this.fotoOdometro = this.foto.ultimaFoto; })
  }
  mostrar2() {
    this.foto.getFoto('picture')
      .then(responses => {this.fotoBomba1 = this.foto.ultimaFoto; })
  }
  mostrar3() {
    this.foto.getFoto('picture')
      .then(responses => {this.fotoBomba2 = this.foto.ultimaFoto; })
  }
}

