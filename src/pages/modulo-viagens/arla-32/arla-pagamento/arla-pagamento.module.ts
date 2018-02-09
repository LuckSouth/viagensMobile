import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
import { ArlaPagamentoPage } from './arla-pagamento';

@NgModule({
  declarations: [
    ArlaPagamentoPage,
  ],
  
  imports: [
    IonicPageModule.forChild(ArlaPagamentoPage),
  ],
})
export class ArlaPagamentoModule {}