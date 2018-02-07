import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation'; 

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { MyApp } from './app.component'; 

import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { ReceitasFornecedorPage } from '../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor';
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
import { FotoarlaPage } from '../pages/modulo-viagens/arla-32/fotoarla/fotoarla';
 
import { Camera } from "@ionic-native/camera";
import { FotoServicoProvider } from '../providers/foto-servico/foto-servico';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage'
import { DadosProvider } from '../providers/dados/dados';
import { HttpClient, HttpClientModule } from "@angular/common/http"; 

import { LoginPage } from '../pages/login/login'; 
import { EnviarProvider } from '../providers/enviar/enviar';

import { BrMaskerModule } from 'brmasker-ionic-3';



@NgModule({
  declarations: [
    MyApp, 
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage, 
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
    FotoarlaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CustomFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrMaskerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage, 
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
    FotoarlaPage,
    LoginPage
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
    EnviarProvider
  ]
})
export class AppModule { }