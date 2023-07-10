import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema_1';

  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';

  clientes: any[] = []; // Lista de clientes

  afegirclient() {
    const nouclient = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    };

    // Agregar el nuevo cliente a la lista de clientes
    this.clientes.push(nouclient);

    // Restablecer los valores de los campos de entrada
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  }
}
