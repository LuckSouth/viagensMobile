import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';  
import { ArlaPostoPage } from './arla-posto';

@NgModule({
  declarations: [
    ArlaPostoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArlaPostoPage),
  ],
})
export class ArlaPostoModule {}
