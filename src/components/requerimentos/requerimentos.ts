import { Component } from '@angular/core';
 
@Component({
  selector: 'requerimentos',
  templateUrl: 'requerimentos.html'
})
export class RequerimentosComponent {

  text: string;

  constructor() {
    console.log('Hello RequerimentosComponent Component');
    this.text = 'Hello World';
  }

}
