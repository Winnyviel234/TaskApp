
export type CategoriaTarea = 'Estudios' | 'Proyectos' | 'Personal';

export interface Subtarea {
  id: string;
  titulo: string;
  completada: boolean;
}

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  completada: boolean;

  // Nuevas propiedades opcionales para mantener compatibilidad
  fechaLimite?: string;
  favorito?: boolean;
  categoria?: CategoriaTarea;
  subtareas?: Subtarea[];
  fechaCreacion?: string;
}