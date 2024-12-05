import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class EmpleadosService{
    
    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[] = [

        new Empleado ("Oc", "Gonzalez", "CEO", 10000),
        new Empleado ("Jesus", "Montero", "Jefe de Marketing", 6700),
        new Empleado ("Julio", "Ortiz", "Jefe de Sistemas", 6700),
        new Empleado ("Antonio", "Pazo", "Jefe de RRHH", 4900),
    
      ];
 
      
    agregarEmpleadoServicio(empleado: Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar" + "\n" + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);
    }
}