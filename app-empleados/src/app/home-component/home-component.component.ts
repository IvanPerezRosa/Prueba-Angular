import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    // this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    // this.empleados = this.empleadosService.empleados;

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{

      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);

      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  empleados:Empleado[] = [];


  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del Empleado: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
}
