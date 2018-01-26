import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DespesasRelatoriosPage } from './despesas-relatorios';

@NgModule({
  declarations: [
    DespesasRelatoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(DespesasRelatoriosPage),
  ],
})
export class DespesasRelatoriosPageModule {}
