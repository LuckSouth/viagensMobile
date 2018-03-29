import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico';
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
  /* Acesso ao valor de cada propriedade ou método */
  @ViewChild(Slides) slides: Slides;
  @ViewChild(AbastecimentoPagamentoPage) abastecimentoPagamento: AbastecimentoPagamentoPage;
  @ViewChild(AbastecimentoBombasPage) abastecimentoBombas: AbastecimentoBombasPage;


  /* Recupera os valores das variáveis de outras páginas */
  /* A variavel 'contador' indica em que slide o usuário está */
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


  /* Envia os dados para o Storage Provider */
  salvar() {
    this.dados.abastecimento(
      this.storageProvider.listaGeral[0].idMotorista,
      this.storageProvider.listaGeral[0].idViagem,
      this.abastecimentoPagamento.storageProvider.abastecimento.dataAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.tipoPagmtAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.odometro,
      this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb1,
      this.abastecimentoPagamento.storageProvider.abastecimento.litrosBomb2,
      this.abastecimentoPagamento.storageProvider.abastecimento.postoAbastecimento,
      this.abastecimentoPagamento.storageProvider.abastecimento.precoAbastecimento,

    )
  }

  /* 'ngAfterViewInit' Método que executa a todo instante */
  ngAfterViewInit() {
    /* Bloqueia a passagem do slide com deslize */
    this.slides.lockSwipes(true);

    if (this.contador == 1) {
      return this.abastecimentoPagamento.valida();
    }
    if (this.contador == 2) {
      return this.abastecimentoBombas.valida();
    }
  }
  /* Retorna o slide */
  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
    }
    this.slides.lockSwipes(true);
  }

  /* Avança o slide */
  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    /* Salva os dados no último slide */
    if (this.contador == 3) {
      this.salvar()
      let toast = this.toastCtrl.create({
        message: 'Abastecimento adicionada com sucesso',
        duration: 2000
      });
      toast.present();
      this.navCtrl.pop();

    }
    this.slides.lockSwipes(true);
  }
  /* Executa a função de Fotografar */
  mostrar() {
    this.foto.getFoto('picture');
  }
}

