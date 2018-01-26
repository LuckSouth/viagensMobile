import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotasReceitasPage } from './rotas-receitas';

@NgModule({
  declarations: [
    RotasReceitasPage,
  ],
  imports: [
    IonicPageModule.forChild(RotasReceitasPage),
  ],
})
export class RotasReceitasPageModule {}
