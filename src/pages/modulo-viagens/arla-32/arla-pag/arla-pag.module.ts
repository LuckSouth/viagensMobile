import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
import { ArlaPagPage } from './arla-pag';

@NgModule({
  declarations: [
    ArlaPagPage,
  ],
  
  imports: [
    IonicPageModule.forChild(ArlaPagPage),
  ],
})
export class ArlaPagModule {}