import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { GeralPage } from '../geral/geral-page/geral-page';
import { DespesasPage } from '../despesas/despesas/despesas';  
import { DadosProvider } from "../../../providers/dados/dados"; 
import { Storage } from "@ionic/storage";
import { StorageProvider } from "../../../providers/storage/storage";
import { RelatoriosPage } from "../relatorios/relatorios-page/relatorios";
import { EnviarProvider } from "../../../providers/enviar/enviar";
import { ArlaPagamentoPage } from '../arla-32/arla-pagamento/arla-pagamento';
// import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ReceitasPage } from '../receitas/receitas/receitas'; 
import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';

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
    public enviar: EnviarProvider, 
    public http: HttpClient) {
  }

  /* Funções de link para outras páginas */

  linkAbastecimento() {
    this.navCtrl.push(RotasAbastecimentoPage);
  }

  linkReceitas() {
    this.navCtrl.push(ReceitasPage);
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




  // //enviar dados pro php
  // public hideForm: boolean = false;
  // private baseURI: string = "http://192.168.10.160/";

  // puxar(login: string, senha: string): void {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     options: any = {
  //       "login": login,
  //       "senha": senha
  //     },
  //     url: any = this.baseURI + "login.php";

  //   try {
  //     console.log
  //     this.http.post(url, JSON.stringify(options), headers)
  //       .subscribe((data: any) => {
  //         console.log(data) 
  //         console.log(data[0])
  //         this.hideForm = true;
  //       },
  //       (error: any) => {
  //         console.log(error);

  //       });
  //   } catch (error) {
  //     console.log('catch')
  //   }
  // }
  


  ionViewDidEnter() { 
    this.arlaPendente = this.storageProvider.tamanhoArla();
    this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
    this.despesasPendente = this.storageProvider.tamanhoDespesas();
    this.receitasPendente = this.storageProvider.tamanhoReceitas();

    this.enviar.enviar();

  }
}
