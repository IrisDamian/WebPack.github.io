// todolist/todolist.js

// Array para almacenar las tareas
const tareas = [];

// Función para agregar una tarea a la lista
export function agregarTarea(tarea) {
  tareas.push(tarea);
}

// Función para marcar una tarea como completada
export function completarTarea(index) {
  if (index >= 0 && index < tareas.length) {
    tareas[index].completada = true;
  }
}

// Función para obtener la lista de tareas
export function obtenerListaTareas() {
  return tareas;
}
