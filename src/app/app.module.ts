import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { HomePage } from '../pages/modulo-viagens/home/home/home';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { ReceitasFornecedorPage } from '../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor';
import { ReceitasQntPage } from '../pages/modulo-viagens/receitas/receitas-qnt/receitas-qnt';
import { ReceitasFotoPage } from '../pages/modulo-viagens/receitas/receitas-foto/receitas-foto';

import { GeralPage } from '../pages/modulo-viagens/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';

import { AbastecimentoPagamentoPage } from '../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento';
import { AbastecimentoOdometroPage } from '../pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro';
import { AbastecimentoBomba1Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1';
import { AbastecimentoBomba2Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2';
import { RotasAbastecimentoPage } from '../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento';
import { AbastecimentoFotoBomba_1Page } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1';
import { AbastecimentoFotoBomba_2Page } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2';
import { AbastecimentoFotoOdometroPage } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro';

import { RotasArlaPage } from '../pages/modulo-viagens/arla-32/rotas-arla/rotas-arla';
import { RotasReceitasPage } from '../pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas';

import { RelatoriosPage } from '../pages/modulo-viagens/relatorios/relatorios-page/relatorios';
import { ReceitasRelatoriosPage } from '../pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios';
import { DespesasRelatoriosPage } from '../pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios';
import { AbastecimentoRelatoriosPage } from '../pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios';
import { ArlaRelatoriosPage } from '../pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios';

import { ArlaPagPage } from '../pages/modulo-viagens/arla-32/arla-pag/arla-pag';
import { ArlaPostoPage } from '../pages/modulo-viagens/arla-32/arla-posto/arla-posto';

import { Camera } from "@ionic-native/camera";
import { FotoServicoProvider } from '../providers/foto-servico/foto-servico';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage'
import { DadosProvider } from '../providers/dados/dados';
import { HttpClient, HttpClientModule } from "@angular/common/http";
// import {  Network} from "@ionic-native/network";

import { LoginPage } from '../pages/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { EnviarProvider } from '../providers/enviar/enviar';

import { BrMaskerModule } from 'brmasker-ionic-3';
import {Ionic2MaskDirective} from "ionic2-mask-directive";
import { TextMaskModule } from 'angular2-text-mask';





@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,
    ReceitasFotoPage,
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    AbastecimentoBomba2Page,
    RotasAbastecimentoPage,
    RotasArlaPage,
    RotasReceitasPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage,
    AbastecimentoFotoBomba_1Page,
    AbastecimentoFotoBomba_2Page,
    AbastecimentoFotoOdometroPage,
    RelatoriosPage,
    DespesasRelatoriosPage,
    ReceitasRelatoriosPage,
    ArlaRelatoriosPage,
    AbastecimentoRelatoriosPage,
    InicioPage,
    Ionic2MaskDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CustomFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrMaskerModule,
    TextMaskModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,
    ReceitasFotoPage,
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    RotasAbastecimentoPage,
    AbastecimentoBomba2Page,
    RotasReceitasPage,
    RotasArlaPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage,
    AbastecimentoFotoBomba_1Page,
    AbastecimentoFotoBomba_2Page,
    AbastecimentoFotoOdometroPage,
    RelatoriosPage,
    DespesasRelatoriosPage,
    ReceitasRelatoriosPage,
    ArlaRelatoriosPage,
    AbastecimentoRelatoriosPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FotoServicoProvider,
    ScreenOrientation,
    StorageProvider,
    DadosProvider,
    HttpClient,
    GooglePlus,
    EnviarProvider
  ]
})
export class AppModule { }