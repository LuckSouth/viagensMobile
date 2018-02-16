import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../../providers/storage/storage';



@Injectable()
export class RecuperarDadosProvider {
  
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.152/";

  constructor(
    public http: HttpClient,
    public storageProvider: StorageProvider) {
  }




  fornecedores(atributo:string, tabela:string,): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = this.baseURI + "fonecedores.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarFornecedores(data)
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }

  produtos(atributo:string, tabela:string,): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = this.baseURI + "produtos.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarProdutos(data)
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }

  formasPagamento(atributo:string, tabela:string,): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = this.baseURI + "formas-pagamento.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarformasPagamento(data)
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }
}
