import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html' 
})
 
export class ClientesPage {

  searchQuery: string = '';
  items: string[];
  cnpj: string[];
  id: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
  
    this.items = [ 
      'Bogota',
      'criaano'
    ];
    this.cnpj = [ 
      '6541',
      '534757854', 
      '5347544',
    ];
    this.id = [
      '1',
      '2',
      '3'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }) 
    }
  } 
}
