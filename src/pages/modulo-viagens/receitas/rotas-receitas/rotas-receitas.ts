import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico';

import { ReceitasFornecedorPage } from '../receita-fornecedor/receita-fornecedor';
import { ReceitasFotoPage } from '../receitas-foto/receitas-foto';
import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from "../../../../providers/dados/dados";

@IonicPage()
@Component({
  selector: 'page-rotas-receitas',
  templateUrl: 'rotas-receitas.html',
})
export class RotasReceitasPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(ReceitasFornecedorPage) ReceitasFornecedor: ReceitasFornecedorPage;
  @ViewChild(ReceitasFotoPage) ReceitasFoto: ReceitasFotoPage;
  // @ViewChild(Receitas) receitas: Receitas;

  contador: number = 1;
  cameraButton: boolean;
  fotoReceitas: string = "dsfsdf";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public foto: FotoServicoProvider,
    public storageProvider: StorageProvider,
    public dados: DadosProvider) {

  }


  salvar() {
 
      this.dados.receitas(
        this.storageProvider.receitas.motorista,
        this.storageProvider.receitas.fornecedorOrigem,
        this.storageProvider.receitas.fornecedorDestino,
        this.storageProvider.receitas.produto,
        this.storageProvider.receitas.tipoPagmt,
        this.storageProvider.receitas.idUnidadeMedida,
        this.storageProvider.receitas.qntFaturado,
        this.storageProvider.receitas.qntDescarregado,
        this.storageProvider.receitas.valorUnitario,
        this.storageProvider.receitas.idSubUnidade
      )    

    console.log("Receitas chamado")
  }


  ngAfterViewInit() {

    this.slides.lockSwipes(true);

    if (this.contador == 1) {
      return this.ReceitasFornecedor.valida();
    }

    if (this.contador == 2) {
      if (this.fotoReceitas != undefined) {
        return true;
      }

    }


  }

  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 2) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    if (this.contador == 0) {
      this.navCtrl.pop();
    }
    this.slides.lockSwipes(true);
  }

  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 4) {

      this.salvar();

      //Armazenar no Storage
      // this.storageProvider.adicionarReceitas();


      // Toast
      let toast = this.toastCtrl.create({
        message: 'Receita adicionada com sucesso',
        duration: 2000
      });
      toast.present();

      this.navCtrl.pop();
    }
    if (this.contador == 2) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    this.slides.lockSwipes(true);
  }
  mostrar() {

    this.foto.getFoto('picture')
      .then(responses => {

        if (this.contador == 2) {
          this.fotoReceitas = this.foto.ultimaFoto;
          console.log(this.fotoReceitas);
        }
      })
  }
}
