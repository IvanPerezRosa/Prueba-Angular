import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre:string= '';
  apellido:string= '';

  entradas: { titulo: string } [] = [  
    { titulo: "Python" }, 
    { titulo: "JavaScript" },  
    { titulo: "TypeScript" },  
    { titulo: "Angular" },  
    { titulo: "Node.js" },
  ];

  registrarUsuario() {

    this.registrado = true;

    this.mensaje = 'Usuario registrado correctamente';
  }
}
