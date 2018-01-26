import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceitasFotoPage } from './receitas-foto';

@NgModule({
  declarations: [
    ReceitasFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceitasFotoPage),
  ],
})
export class ReceitasFotoPageModule {}
