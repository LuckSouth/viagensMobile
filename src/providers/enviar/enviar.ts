import { Injectable } from '@angular/core';
// import { Network } from "@ionic-native/network";
import { StorageProvider } from "../../providers/storage/storage";
import { DadosProvider } from "../dados/dados";
import { Storage } from '@ionic/storage';

@Injectable()
export class EnviarProvider {

  despesas = []
  abastecimento = []
  arla = []
  receitas = []

  constructor(public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public storage: Storage) {
  }

  enviar() {
    if (this.storageProvider.tamanhoDespesas() > 0) {

      this.despesas = this.storageProvider.listaDespesas

      for (var index = 0; index <= this.storageProvider.tamanhoDespesas(); index++) {
        console.log('enviar arquivos no cache');
        this.despesas = this.storageProvider.listaDespesas

        this.dados.despesa(
          this.despesas[index].motorista,
          this.despesas[index].despesas,
          this.despesas[index].dataDespesas,
          this.despesas[index].valorDespesas,
          true
        )

        // this.storageProvider.listaDespesas = [];

      }
      // this.storage.delete(this.storage.chaveDespesas)


    }



    //Abastecimento

    if (this.storageProvider.tamanhoAbastecimento() > 0) {

      this.abastecimento = this.storageProvider.listaAbastecimento

      for (index = 0; index <= this.storageProvider.tamanhoAbastecimento(); index++) {
        console.log('enviar arquivos no cache');
        this.abastecimento = this.storageProvider.listaAbastecimento

        this.dados.abastecimento(
          this.abastecimento[index].motorista,
          this.abastecimento[index].tipoPosto,
          this.abastecimento[index].posto,
          this.abastecimento[index].data,
          this.abastecimento[index].tipoPagamento,
          this.abastecimento[index].odometro,
          this.abastecimento[index].valorLitrosBomba1,
          this.abastecimento[index].valorPrecoBomba1,
          this.abastecimento[index].valorPrecoBomba2,
          this.abastecimento[index].valorLitrosBomba2,
          true
          

        )

      }

      this.storageProvider.delete(this.storageProvider.abastecimento)

    }

    //Arla

    if (this.storageProvider.tamanhoArla() > 0) {

      this.arla = this.storageProvider.listaArla

      for (index = 0; index <= this.storageProvider.tamanhoArla(); index++) {
        this.abastecimento = this.storageProvider.listaArla
        this.dados.arla(
          this.arla[index].motorista,
          this.arla[index].tipoPosto,
          this.arla[index].posto,
          this.arla[index].data,
          this.arla[index].formaPagamento,
          this.arla[index].km,
          this.arla[index].litros,
          this.arla[index].preco,
          true


        )

      }


    }



    //Receitas

    if (this.storageProvider.tamanhoReceitas() > 0) {

      this.arla = this.storageProvider.listaArla

      for (index = 0; index <= this.storageProvider.tamanhoReceitas(); index++) {
        this.receitas = this.storageProvider.listaReceitas
        this.dados.receitas(
          this.receitas[index].motorista,
          this.receitas[index].fornecedorOrigem,
          this.receitas[index].fornecedorDestino,
          this.receitas[index].produto,
          this.receitas[index].tipoPagment,
          this.receitas[index].idUnidadeMedida,
          this.receitas[index].qntFaturado,
          this.receitas[index].qntDescarregado,
          this.receitas[index].valorUnitario,
          this.receitas[index].idSubUnidade,
          true


        )

      }

    }



  }


}
