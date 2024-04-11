import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora (Tarea 2.3.4)';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //Metodo sumar.
  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  //metodo restar
  restar() : void{
    this.resultado = this.numero1 - this.numero2;
  }
  //metodo multiplicar
  multiplicar() : void{
    this.resultado = this.numero1 * this.numero2;
  }
  //metodo dividir
  dividir() : void{
    this.resultado = this.numero1 / this.numero2;
  }

}
