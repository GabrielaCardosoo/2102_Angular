import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  num1: number | null = null;
  num2: number | null = null;
  operation: string = 'soma';
  resultado: number | null = null;

  calcular(): void {
    if (this.num1 === null || (this.num2 === null && this.operation !== 'raiz')) {
      console.log("Erro: Número inválido");
      return;
    }

    switch (this.operation) {
      case 'soma':
        this.resultado = (this.num1 ?? 0) + (this.num2 ?? 0);
        break;
      case 'subtracao':
        this.resultado = (this.num1 ?? 0) - (this.num2 ?? 0);
        break;
      case 'multiplicacao':
        this.resultado = (this.num1 ?? 0) * (this.num2 ?? 0);
        break;
      case 'divisao':
        // Verifique se num2 não é 0 para evitar divisão por zero
        if (this.num2 === 0) {
          this.resultado = NaN;
        } else {
          this.resultado = (this.num1 ?? 0) / (this.num2 ?? 1); // Usando 1 caso num2 seja null
        }
        break;
      case 'potencia':
        this.resultado = Math.pow(this.num1 ?? 0, this.num2 ?? 0);
        break;
      case 'raiz':
        // Verifique se num1 é positivo ou zero para operação de raiz quadrada
        this.resultado = this.num1 !== null && this.num1 >= 0 ? Math.sqrt(this.num1) : NaN;
        break;
      default:
        this.resultado = null;
    }

    // Exibir resultado no console
    console.log("Resultado:", this.resultado);
  }
}