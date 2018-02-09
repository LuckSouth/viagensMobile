import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component'; 

@Injectable()
export class StorageProvider {

  page: MyApp;

  arrayAbastecimento = [];
  arrayArla = [];
  arrayDespesas = [];
  arrayReceitas = [];

  login = {
    isLoggedIn: false,
    name: "",
  }

  //Dados despesas
  despesas = {
    motorista: "bino",
    id: 1,
    despesas: "",
    dataDespesas: "",
    valorDespesas: ""
  }

  //Dados Receitas
  receitas = {
    motorista: "bino",
    id: 2,
    fornecedorOrigem: "",
    fornecedorDestino: "",
    produto: "",
    tipoPagmt: "",
    idUnidadeMedida: "",
    idUnidadeBandeja: "",
    caixa: "",
    qntFaturado: "",
    qntDescarregado: "",
    valorUnitario: "",
    idSubUnidade: ""
  }


  //Dados arla
  arla = {
    motorista: "bino",
    id: 3,
    dataArla: "",
    postoArla: "",
    tipoArla: "",
    km: "",
    litrosArla: "",
    litrosPrecoArla: "",
    pagArla: "",
    precoArla:"",
    odometroArla: "",
  }




  //Dados abastecimento
  abastecimento = {
    motorista: "bino",
    id: 4,
    tipoAbastecimento: "",
    postoAbastecimento: "",
    dataAbastecimento: "",
    tipoPagmtAbastecimento: "",
    odometro: "",
    litrosBomb1: "",
    precoBomb1: "",
    litrosBomb2: "",
    precoBomb2: "",
    precoAbastecimento: "",
  }


  listaAbastecimento: any[];
  listaArla: any[];
  listaDespesas: any[];
  listaReceitas: any[];
  listaAuth: any[];

  chaveAuth: string = "Auth";
  chaveAbastecimento: string = "abastecimento";
  chaveArla: string = "arla";
  chaveDespesas: string = "despesas";
  chaveReceitas: string = "receitas";


  constructor(private storage: Storage) {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveAbastecimento).then((registros) => {
        if (registros) {
          this.listaAbastecimento = registros;
        } else {
          this.listaAbastecimento = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveArla).then((registros) => {
        if (registros) {
          this.listaArla = registros;
        } else {
          this.listaArla = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveDespesas).then((registros) => {
        if (registros) {
          this.listaDespesas = registros;
        } else {
          this.listaDespesas = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveAuth).then((registros) => {
        if (registros) {
          this.listaAuth = registros;
        } else {
          this.listaAuth = [];
        }
      })
    })

    this.storage.ready().then(() => {
      this.storage.get(this.chaveReceitas).then((registros) => {
        if (registros) {
          this.listaReceitas = registros;
        } else {
          this.listaReceitas = [];
        }
      });

    });

  }

  listarAuth() {
    // return new Promise((resolve, reject) => {
    // this.page.rootPage = PrincipalPage
    return this.listaAuth;

    // })
  }

  listarArla() {
    return this.listaArla;
  }
  listarDespesa() {
    return this.listaDespesas;
  }
  listarReceitas() {
    return this.listaReceitas;
  }

  tamanhoAbastecimento() {
    this.arrayAbastecimento = this.listar()
    return this.arrayAbastecimento.length
  }

  tamanhoArla() {
    this.arrayArla = this.listarArla()
    return this.arrayArla.length
  }
  tamanhoDespesas() {
    this.arrayDespesas = this.listarDespesa()
    return this.arrayDespesas.length
  }
  tamanhoReceitas() {
    this.arrayReceitas = this.listarReceitas()
    return this.arrayReceitas.length
  }


  //  Vai retornar a lista
  listar() {
    return this.listaAbastecimento;
  }

  //Verificação Login

  loginUser() {
    this.storage.ready().then(() => {
      this.listaAuth.push(this.login);
      this.storage.set(this.chaveAuth, this.listaAuth);
    })
  }






  recuperaTamanho() {
    this.storage.length().then(result => {
      console.log(result)
      return result
    });

  }

  //Verificação Login
  // loginUser() {
  //   this.storage.ready().then(() => {
  //     this.lista.push(this.isLoggedIn);
  //     this.storage.set(this.chave, this.lista);
  //   });
  // }


  // Adicionar Despesas
  adicionarDespesas() {
    this.storage.ready().then(() => {
      this.listaDespesas.push(this.despesas);
      this.storage.set(this.chaveDespesas, this.listaDespesas);
    });

  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.listaReceitas.push(this.receitas);
      this.storage.set(this.chaveReceitas, this.listaReceitas);
    });
  }
  // Adicionar Arla
  adicionarArla() {
    this.storage.ready().then(() => {
      this.listaArla.push(this.arla);
      //this.storage.set(this.chaveArla, this.listaArla);
    });
  }


  adicionarAbastecimento() {
    this.storage.ready().then(() => {
      this.listaAbastecimento.push(this.abastecimento);
      this.storage.set(this.chaveAbastecimento, this.listaAbastecimento);
    });
  }

  // 1º vai ser o "Storage" que quer atualizar -- 2º os "Dados" que vai chegar do formulário
  // Atualizar determinados registros
  atualizar(key) {
    // for (let chave in this.listaAuth) {
    //   if (this.listaAuth[chave] == storage) {
    // this.listaAuth[chave] = dados;
    this.storage.set(key, this.login);
    //   }
    // }
  }

  // // Deletar Storage
  // deletar(storage) {
  //   for (let chave in this.listaReceitas) {
  //     if (this.listaReceitas[chave] == storage) {
  //       this.listaReceitas.splice(parseInt(chave), 1);
  //       this.storage.set(this.chaveReceitas, this.listaReceitas);
  //     }
  //   }
  // }

  delete(id) {
    return this.storage.remove(id).
      then(() => true)
  }

 

}
