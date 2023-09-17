// galeria-imagenes/galeria.js

// Función para cargar y mostrar imágenes en la galería
export function cargarImagenes() {
    // Obtener el elemento de la galería en el DOM
    const galeria = document.getElementById('galeria');
  
    // Crear un elemento <input> para seleccionar imágenes
    const inputImagenes = document.createElement('input');
    inputImagenes.type = 'file';
    inputImagenes.accept = 'image/*';
    inputImagenes.multiple = true;
  
    // Crear un elemento <button> para cargar imágenes
    const botonCargar = document.createElement('button');
    botonCargar.textContent = 'Cargar Imágenes';
  
    // Agregar un evento al botón de carga
    botonCargar.addEventListener('click', () => {
      inputImagenes.click();
    });
  
    // Agregar un evento al input de selección de imágenes
    inputImagenes.addEventListener('change', () => {
      const archivos = inputImagenes.files;
      for (let i = 0; i < archivos.length; i++) {
        const imagen = document.createElement('img');
        imagen.src = URL.createObjectURL(archivos[i]);
        galeria.appendChild(imagen);
      }
    });
  
    // Agregar elementos al DOM
    galeria.appendChild(inputImagenes);
    galeria.appendChild(botonCargar);
  }
  