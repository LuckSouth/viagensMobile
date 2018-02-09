import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';
import { GeralPage } from '../geral/geral-page/geral-page';
import { DespesasPage } from '../despesas/despesas/despesas'; 
import { RotasReceitasPage } from '../receitas/rotas-receitas/rotas-receitas';
import { DadosProvider } from "../../../providers/dados/dados"; 
import { Storage } from "@ionic/storage";
import { StorageProvider } from "../../../providers/storage/storage";
import { RelatoriosPage } from "../relatorios/relatorios-page/relatorios";
import { EnviarProvider } from "../../../providers/enviar/enviar";
import { ArlaPagamentoPage } from '../arla-32/arla-pagamento/arla-pagamento';
@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage {
  
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dados: DadosProvider, 
    public storage: Storage,
    public storageProvider: StorageProvider,
    public enviar: EnviarProvider) {
  }

  /* Funções de link para outras páginas */

  linkAbastecimento() {
    this.navCtrl.push(RotasAbastecimentoPage);
  }

  linkReceitas() {
    this.navCtrl.push(RotasReceitasPage);
  }

  linkDespesas() {
    this.navCtrl.push(DespesasPage);
  }

  linkArla32() {
    this.navCtrl.push(ArlaPagamentoPage);
  }

  linkGeral() {
    this.navCtrl.push(GeralPage);
  }

  linkRelatorios() {
    this.navCtrl.push(RelatoriosPage);
  }
  ionViewDidEnter() { 
    this.arlaPendente = this.storageProvider.tamanhoArla();
    this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
    this.despesasPendente = this.storageProvider.tamanhoDespesas();
    this.receitasPendente = this.storageProvider.tamanhoReceitas();

    this.enviar.enviar();

  }
}
