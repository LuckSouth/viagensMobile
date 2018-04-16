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
  items: any[];
  cnpj: string[];
  id: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }


  initializeItems() {
    this.items = [{
      "nome_cliente": "Filipe Felipe Pinto",
      "cnpj": "44.417.978/0001-29",
      "limite": 500,
      "id_cliente": "1"
    },
    {
      "nome_cliente": "Kevin Tomás da Rosa ",
      "cnpj": "93.378.768/0001-84",
      "limite": 1500,
      "id_cliente": "3"
    }, {
      "nome_cliente": "Elias Benício Kevin dos Santos ",
      "cnpj": "98.269.715/0001-49",
      "limite": 700,
      "id_cliente": "2"
    },
   ]
  }

  e(item) {
    console.log(item)

  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.id_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.id_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      })

    }
  }

}
