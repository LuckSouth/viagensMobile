import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../../providers/storage/storage';



@Injectable()
export class RecuperarDadosProvider {
  
  public hideForm: boolean = false;
  private baseURI: string = "http://192.168.10.144/html/";

  constructor(
    public http: HttpClient,
    public storageProvider: StorageProvider) {
  }


  postosAbastecimento(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { 
      },
      url: any = this.baseURI + "postos-combustiveis.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarFornecedores(data) 
          this.hideForm = true; 
        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }


  dadosFornecedor(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { 
      },
      url: any = this.baseURI + "login.php";

    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarFornecedores(data) 
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
