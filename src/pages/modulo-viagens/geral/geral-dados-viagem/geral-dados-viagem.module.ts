import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeralDadosViagemPage } from './geral-dados-viagem';

@NgModule({
  declarations: [
    GeralDadosViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(GeralDadosViagemPage),
  ],
})
export class GeralDadosViagemModule {}
