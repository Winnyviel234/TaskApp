import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonList, IonItem, IonLabel, IonBadge, IonFab, IonFabButton,
  IonIcon, IonCheckbox, IonButton, IonModal, IonInput,
  IonTextarea, IonSelect, IonSelectOption, IonButtons, IonText,
  IonSearchbar
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  add, trash, close, create, search,
  checkmarkCircle, calendarOutline, sparklesOutline
} from 'ionicons/icons';

import { Tarea } from '../models/tarea.model';
import { TareaService } from '../services/tarea.service';

type FiltroTareas = 'Todas' | 'Pendientes' | 'Completadas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonList, IonItem, IonLabel, IonBadge, IonFab, IonFabButton,
    IonIcon, IonCheckbox, IonButton, IonModal, IonInput,
    IonTextarea, IonSelect, IonSelectOption, IonButtons, IonText,
    IonSearchbar
  ]
})
export class HomePage implements OnInit {
  private servicio = inject(TareaService);
  private fb = inject(FormBuilder);

  tareas: Tarea[] = [];
  mostrarFormulario = false;

  busqueda = '';
  filtroActual: FiltroTareas = 'Todas';
  idTareaEditando: number | null = null;
  mensaje = '';

  formulario = this.fb.group({
  titulo: ['', [Validators.required, Validators.minLength(5)]],
  descripcion: [''],
  prioridad: ['Media' as Tarea['prioridad'], Validators.required],
  fechaLimite: ['']
  });

  constructor() {
    addIcons({
      add, trash, close, create, search,
      checkmarkCircle, calendarOutline, sparklesOutline
    });
  }

  ngOnInit(): void {
    this.actualizarTareas();
  }

  actualizarTareas(): void {
    this.tareas = this.servicio.obtenerTareas();
  }

  // CALCULAR LOS DÍAS RESTANTES
    diasRestantes(fecha?: string): number | null {
      if (!fecha) {
        return null;
      }

      const [anio, mes, dia] = fecha.split('-').map(Number);
      const limite = new Date(anio, mes - 1, dia);
      const hoy = new Date();

      hoy.setHours(0, 0, 0, 0);
      limite.setHours(0, 0, 0, 0);

      return Math.round(
        (limite.getTime() - hoy.getTime()) / 86400000
      );
    }

    // MOSTRAR EL ESTADO DEL PLAZO
    textoPlazo(fecha?: string): string {
      const dias = this.diasRestantes(fecha);

      if (dias === null) {
        return '';
      }

      if (dias < 0) {
        const vencidaHace = Math.abs(dias);
        return `Vencida hace ${vencidaHace} ${
          vencidaHace === 1 ? 'día' : 'días'
        }`;
      }

      if (dias === 0) {
        return 'Vence hoy';
      }

      return `Faltan ${dias} ${dias === 1 ? 'día' : 'días'}`;
    }
  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

  get tareasPendientes(): number {
    return this.tareas.filter(t => !t.completada).length;
  }

  get tareasVencidas(): number {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    return this.tareas.filter(t => {
      if (t.completada) {
        return false;
      }

      const fecha = (t as Tarea & { fechaLimite?: string }).fechaLimite;

      if (!fecha) {
        return false;
      }

      const limite = new Date(`${fecha}T00:00:00`);
      return !Number.isNaN(limite.getTime()) && limite < hoy;
    }).length;
  }

  get progreso(): number {
    if (this.tareas.length === 0) {
      return 0;
    }

    return Math.round(
      (this.tareasCompletadas / this.tareas.length) * 100
    );
  }

  get tareasFiltradas(): Tarea[] {
    const texto = this.busqueda.trim().toLowerCase();

    return this.tareas.filter(tarea => {
      const coincideBusqueda =
        tarea.titulo.toLowerCase().includes(texto) ||
        (tarea.descripcion ?? '').toLowerCase().includes(texto);

      const coincideFiltro =
        this.filtroActual === 'Todas' ||
        (this.filtroActual === 'Pendientes' && !tarea.completada) ||
        (this.filtroActual === 'Completadas' && tarea.completada);

      return coincideBusqueda && coincideFiltro;
    });
  }

  buscarTareas(event: CustomEvent): void {
    this.busqueda = String(event.detail?.value ?? '');
  }

  cambiarFiltro(filtro: FiltroTareas): void {
    this.filtroActual = filtro;
  }

  abrirFormulario(): void {
    this.idTareaEditando = null;
    this.mensaje = '';

    this.formulario.reset({
      titulo: '',
      descripcion: '',
      prioridad: 'Media',
      fechaLimite: ''
    });

    this.mostrarFormulario = true;
  }

  abrirEdicion(tarea: Tarea): void {
    this.idTareaEditando = tarea.id;

    this.formulario.reset({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      prioridad: tarea.prioridad,
      fechaLimite: tarea.fechaLimite ?? ''
    });

    this.mensaje = '';
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.idTareaEditando = null;
  }

  guardarTarea(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const datos = this.formulario.getRawValue();
    const titulo = datos.titulo?.trim() ?? '';

    if (titulo.length < 5) {
      this.formulario.controls.titulo.setErrors({ minlength: true });
      this.formulario.controls.titulo.markAsTouched();
      return;
    }

    const tarea = {
      titulo,
      descripcion: datos.descripcion?.trim() ?? '',
      prioridad: datos.prioridad as Tarea['prioridad'],
      fechaLimite: datos.fechaLimite || undefined
    };

    if (this.idTareaEditando !== null) {
      this.servicio.actualizarTarea(this.idTareaEditando, tarea);
      this.mensaje = 'Tarea actualizada correctamente.';
    } else {
      this.servicio.agregarTarea(tarea);
      this.mensaje = 'Tarea creada correctamente.';
    }

    this.actualizarTareas();
    
    this.cerrarFormulario();
  }

  cambiarEstado(id: number): void {
    this.servicio.cambiarEstado(id);
    this.actualizarTareas();
    this.mensaje = 'Estado de la tarea actualizado.';
  }

  eliminarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);

    if (!tarea) {
      return;
    }

    const confirmar = window.confirm(
      `¿Seguro que quieres eliminar "${tarea.titulo}"?`
    );

    if (!confirmar) {
      return;
    }

    this.servicio.eliminarTarea(id);
    this.actualizarTareas();
    this.mensaje = 'Tarea eliminada correctamente.';
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
  }
}