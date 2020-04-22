import { Component, OnInit } from "@angular/core";

import { Tareas } from "../../models/tareas";
import { TareasService } from "../../services/tareas.service";

@Component({
  selector: "app-tareas",
  templateUrl: "./tareas.component.html",
  styleUrls: ["./tareas.component.css"],
})
export class TareasComponent implements OnInit {
  public tareasRegistrada: Tareas;
  public tareasEncontradas: any=[];

  constructor(private tareasService: TareasService) {
    this.tareasRegistrada = new Tareas("", "", "", "");
  }

  ngOnInit(): void {
    this.mostrarTareas();
  }

  // Consumo Servicio crearTarea con el método agrearTarea
  agregarTarea() {
    this.tareasService.crearTarea(this.tareasRegistrada).subscribe(
      (response: any) => {
        let tareas = response.tarea;
        this.tareasRegistrada = tareas;
        if (!this.tareasRegistrada._id) {
          alert("Error al registrar tarea");
        } else {
          alert(
            `Registro exitoso!!, ${this.tareasRegistrada.nombreEncargado} tiene una nueva tarea`
          );
          this.tareasRegistrada = new Tareas("", "", "", "");
          this.mostrarTareas();
        }
      },
      (error) => {
        var errormensaje = <any>error;
        if (errormensaje != null) {
          console.log(error);
        }
      }
    );
  }

  // Consumo Servicio obtenerTareas con el método
  mostrarTareas() {
    this.tareasService.obtenerTareas().subscribe(
      (response: any) => {
        this.tareasEncontradas = response.tareas;
      },
      (error) => {
        var errormensaje = <any>error;
        if (errormensaje != null) {
          console.log(error);
        }
      }
    );
  }

  // Consumo Servicio actualizarTarea con el método editarTarea
  editarTarea(tarea){
    this.tareasService.actualizarTarea(tarea._id, tarea).subscribe(
      (response: any) =>{
        if(response.tarea){
          alert('La tarea ha sido actualizada correctamente!!');
          this.mostrarTareas();
        } else {
          alert('No fue posible actualizar la tarea');
        }
      }, error =>{
        if(error != null){
          console.log(error);
        }
      }
    );
  }

  // Consumo Servicio eliminarTarea con el método
  eliminarTarea(idTarea){
    this.tareasService.eliminarTarea(idTarea).subscribe(
      (response:any)=>{
        if(response.tarea){
          alert('La tarea ha sido eliminada correctamente!!');
          this.mostrarTareas();
        } else {
          alert('No fue posible eliminar la tarea');
        }
    }, error =>{
      if(error != null){
        console.log(error);
      }
    });
  }
}
