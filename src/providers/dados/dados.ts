import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from "../../providers/storage/storage";

@Injectable()
export class DadosProvider {

  constructor(public http: HttpClient,
    public storage: StorageProvider) {
    console.log('Hello DadosProvider Provider');
  }

  private baseURI: string = "http://earhbstfdjygt.tk/";
  public hideForm: boolean = false;


  despesa(motorista: string, despesa: string, data: string, valor: string, opcional?: boolean): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "despesa", "despesa": despesa, "motorista": motorista, "data": data, "valor": valor },
      url: any = this.baseURI + "manage-data.php";


    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;
        },
        (error: any) => {
          // console.log(error.statusText);

          if (error.statusText == "OK") {
            console.log("fazer nada")
            this.storage.delete(this.storage.chaveDespesas);
            this.storage.listaDespesas = [];
          } else {
            console.log('tratar erros');

            if (opcional != true) {
              this.storage.adicionarDespesas()
            }
          }

        });
    } catch (error) {
      console.log('catch')
    }

  }


  abastecimento(
    motorista: string,
    tipoPosto: string,
    posto: string,
    data: string,
    tipoPagamento: string,
    odometro: string,
    litrosBomba1: string,
    precoBomba1: string,
    litrosBomba2: string,
    precoBomba2: string,
    opcional?: boolean

  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "abastecimento",
        "motorista": motorista,
        "tipoPosto": tipoPosto,
        "data": data,
        "tipoPagamento": tipoPagamento,
        "odometro": odometro,
        "litrosBomba1": litrosBomba1,
        "precoBomba1": precoBomba1,
        "litrosBomba2": litrosBomba2,
        "precoBomba2": precoBomba2
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        if (error.statusText == "OK") {
          console.log("fazer nada")
          this.storage.delete(this.storage.chaveAbastecimento);
          this.storage.listaAbastecimento = [];
        } else {
          console.log('tratar erros');

          if (opcional != true) {
            this.storage.adicionarAbastecimento()
          }
        }
      });
  }

  arla(
    motorista: string,
    tipoPosto: string,
    posto: string,
    data: string,
    formaPagamento: string,
    km: string,
    litros: string,
    preco: string,
    opcional?: boolean

  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "arla",
        "motorista": motorista,
        "tipoPosto": tipoPosto,
        "data": data,
        "formaPagamento": formaPagamento,
        "km": km,
        "litros": litros,
        "preco": preco

      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        if (error.statusText == "OK") {
          console.log("fazer nada")
          this.storage.delete(this.storage.chaveArla);
          this.storage.listaArla = [];
        } else {

          if (opcional != true) {
            this.storage.adicionarArla()
          }
        }
      });
  }



  receitas(
    motorista: string,
    fornecedorOrigem: string,
    fornecedorDestino: string,
    produto: string,
    tipoPagmt: string,
    idUnidadeMedida: string,
    qntFaturado: string,
    qntDescarregado: string,
    valorUnitario: string,
    idSubUnidade: string,
    opcional?: boolean
  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "receitas",
        "motorista": motorista,
        "fornecedorOrigem": fornecedorOrigem,
        "fornecedorDestino": fornecedorDestino,
        "produto": produto,
        "tipoPagmt": tipoPagmt,
        "qntFaturado": qntFaturado,
        "qntDescarregado": qntDescarregado,
        "valorUnitario": valorUnitario,
        "idSubUnidade": idSubUnidade,
        "idUnidadeMedida": idUnidadeMedida
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        if (error.statusText == "OK") {
          console.log("fazer nada")
          this.storage.delete(this.storage.chaveReceitas);
          this.storage.listaReceitas = [];
        } else {
          console.log('tratar erros');
          if (opcional != true) {
            this.storage.adicionarReceitas()
          }
        }
      });
  }




}
