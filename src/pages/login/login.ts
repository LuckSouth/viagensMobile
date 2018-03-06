import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { StorageProvider } from '../../providers/storage/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosProvider } from "../../providers/dados/dados";
import { AlertController } from 'ionic-angular';
import { ViagensPage } from '../modulo-viagens/viagens/viagens';
   
import { DespesasPage } from '../modulo-viagens/despesas/despesas/despesas';  
import { RelatoriosPage } from "../modulo-viagens/relatorios/relatorios-page/relatorios"; 
import { EnviarProvider } from "../../providers/enviar/enviar";
import { ArlaPagamentoPage } from '../modulo-viagens/arla-32/arla-pagamento/arla-pagamento'; 
import { ReceitasPage } from '../modulo-viagens/receitas/receitas/receitas';  
import { RecuperarDadosProvider } from '../../providers/recuperar-dados/recuperar-dados';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  private films: any;
  data: void;
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;  

  searchQuery: string = '';
  itemsFornecedores: string[];
  itemsProdutos: string[];
  itemsFormasPagamento: string[];
  fornecedores;


  public itens: Array<any> = [];


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient,
    public dados: DadosProvider, 
    public enviar: EnviarProvider, 
    public alert: AlertController,
    public recuperarDados: RecuperarDadosProvider
  ) { 
    this.recuperarDados.fornecedores('nome', 'produtos');
    this.recuperarDados.produtos('nome', 'produtos');
    this.recuperarDados.formasPagamento('nome', 'produtos');
    this.recuperarDados.geral();
    this.recuperarDados.despesa('nome', 'produtos');
    this.recuperarDados.postos();
  }   
  senha = 'a';
  
  logado(usuario, senha) {   

    return new Promise((resolve, reject) => {
    
      this.dados.login(usuario, senha)
      this.a = this.dados.senha
      if (this.a[0].senha == this.senha) {
        this.arlaPendente = this.storageProvider.tamanhoArla();
        this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
        this.despesasPendente = this.storageProvider.tamanhoDespesas();
        this.receitasPendente = this.storageProvider.tamanhoReceitas();
        this.enviar.enviar();
  
          this.itemsFornecedores = this.storageProvider.listarFornecedores();
          this.fornecedores = this.itemsFornecedores;  
          this.viagensPage()
  
 
      }
      if(this.a[0].senha != this.senha){
        console.log('Sou um merda')
         
    this.arlaPendente = this.storageProvider.tamanhoArla();
    this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
    this.despesasPendente = this.storageProvider.tamanhoDespesas();
    this.receitasPendente = this.storageProvider.tamanhoReceitas();
    this.enviar.enviar();
 
      }
    })
  }

  viagensPage() {
    this.navCtrl.push(ViagensPage);
  }
  //enviar dados pro php
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.152/";
  usuario; 

  a: any[] = [""] 



}

