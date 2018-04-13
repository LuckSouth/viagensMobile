import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalinhaPage } from './galinha';

@NgModule({
  declarations: [
    GalinhaPage,
  ],
  imports: [
    IonicPageModule.forChild(GalinhaPage),
  ],
})
export class GalinhaPageModule {}
