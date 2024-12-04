import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Empleado Funciona!</p>",
  styleUrl: './empleado.component.css'
  // styles: ["p{color: blue;"]

})
export class EmpleadoComponent {

  nombre="Oc";

  apellido="Gonzalez";

  edad=20;

  // empresa="Lipasam";

  llamaEmpresa(value:String){
    
  }

}
