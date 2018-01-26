import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeralDadosMotoristaPage } from './geral-dados-motorista';


@NgModule({
  declarations: [
    GeralDadosMotoristaPage,
  ],
  imports: [
    IonicPageModule.forChild(GeralDadosMotoristaPage),
  ],
})
export class GeralDadosMotoristaModule {}
