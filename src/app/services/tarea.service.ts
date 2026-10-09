
import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];
  private siguienteId = 1;

  constructor() {
    try {
      const datosGuardados = localStorage.getItem('tareas');

      if (datosGuardados) {
        this.tareas = JSON.parse(datosGuardados) as Tarea[];
      }
    } catch {
      this.tareas = [];
    }

    this.siguienteId = this.tareas.length > 0
      ? Math.max(...this.tareas.map(tarea => tarea.id)) + 1
      : 1;
  }

  obtenerTareas(): Tarea[] {
    return [...this.tareas];
  }

  agregarTarea(
    tarea: Omit<Tarea, 'id' | 'completada'>
  ): void {
    this.tareas.push({
      ...tarea,
      id: this.siguienteId++,
      completada: false
    });

    this.guardarTareas();
  }

  actualizarTarea(
    id: number,
    datos: Partial<Omit<Tarea, 'id' | 'completada'>>
  ): void {
    const tarea = this.tareas.find(t => t.id === id);

    if (tarea) {
      Object.assign(tarea, datos);
      this.guardarTareas();
    }
  }

  cambiarEstado(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);

    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarTareas();
  }

  private guardarTareas(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}