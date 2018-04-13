import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvosPage } from './ovos';

@NgModule({
  declarations: [
    OvosPage,
  ],
  imports: [
    IonicPageModule.forChild(OvosPage),
  ],
})
export class OvosPageModule {}
