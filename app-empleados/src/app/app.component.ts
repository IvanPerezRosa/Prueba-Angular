import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] = [

    new Empleado ("Oc", "Gonzalez", "CEO", 10000),
    new Empleado ("Jesus", "Montero", "Jefe de Marketing", 6700),
    new Empleado ("Julio", "Ortiz", "Jefe de Sistemas", 6700),
    new Empleado ("Antonio", "Pazo", "Jefe de RRHH", 4900),

  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }


  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;


}