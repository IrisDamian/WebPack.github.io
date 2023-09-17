// calculos
import { sumar, restar, multiplicar, dividir } from '../../modulo/calculos.js';

document.addEventListener('DOMContentLoaded', () => {
  const numero1 = document.getElementById('numero1');
  const numero2 = document.getElementById('numero2');
  const resultado = document.getElementById('resultado');

  document.getElementById('sumar').addEventListener('click', () => {
    const resultadoSuma = sumar(Number(numero1.value), Number(numero2.value));
    resultado.textContent = resultadoSuma;
  });

  document.getElementById('restar').addEventListener('click', () => {
    const resultadoResta = restar(Number(numero1.value), Number(numero2.value));
    resultado.textContent = resultadoResta;
  });

  document.getElementById('multiplicar').addEventListener('click', () => {
    const resultadoMultiplicacion = multiplicar(Number(numero1.value), Number(numero2.value));
    resultado.textContent = resultadoMultiplicacion;
  });

  document.getElementById('dividir').addEventListener('click', () => {
    const resultadoDivision = dividir(Number(numero1.value), Number(numero2.value));
    resultado.textContent = resultadoDivision;
  });
});


// tasklist
import { agregarTarea, obtenerListaTareas } from '../../modulo/taskList.js';

document.addEventListener('DOMContentLoaded', () => {
  const tareaInput = document.getElementById('tarea');
  const agregarButton = document.getElementById('agregar');
  const listaTareas = document.getElementById('lista-tareas');

  agregarButton.addEventListener('click', () => {
    const nuevaTarea = tareaInput.value;
    if (nuevaTarea) {
      agregarTarea({ tarea: nuevaTarea, completada: false });
      tareaInput.value = '';
      mostrarListaTareas();
    }
  });

  function mostrarListaTareas() {
    listaTareas.innerHTML = '';
    const tareas = obtenerListaTareas();
    tareas.forEach((tarea, index) => {
      const tareaElement = document.createElement('li');
      tareaElement.textContent = tarea.tarea;
      if (tarea.completada) {
        tareaElement.classList.add('completada');
      }
      tareaElement.addEventListener('click', () => {
        completarTarea(index);
        mostrarListaTareas();
      });
      listaTareas.appendChild(tareaElement);
    });
  }

  mostrarListaTareas();
});


// unitconvert
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../../modulo/UnitConvert.js';

document.addEventListener('DOMContentLoaded', () => {
  const temperaturaInput = document.getElementById('temperatura');
  const unidadEntradaSelect = document.getElementById('unidadEntrada');
  const unidadSalidaSelect = document.getElementById('unidadSalida');
  const resultado = document.getElementById('resultado');
  const convertirButton = document.getElementById('convertir');

  convertirButton.addEventListener('click', () => {
    const temperatura = parseFloat(temperaturaInput.value);
    const unidadEntrada = unidadEntradaSelect.value;
    const unidadSalida = unidadSalidaSelect.value;

    if (!isNaN(temperatura)) {
      let resultadoConversion = temperatura;

      if (unidadEntrada === 'celsius' && unidadSalida === 'fahrenheit') {
        resultadoConversion = celsiusToFahrenheit(temperatura);
      } else if (unidadEntrada === 'fahrenheit' && unidadSalida === 'celsius') {
        resultadoConversion = fahrenheitToCelsius(temperatura);
      }

      resultado.textContent = resultadoConversion.toFixed(2) + ' ' + unidadSalida;
    } else {
      resultado.textContent = 'Ingrese una temperatura válida.';
    }
  });
});


// passwordGen
// main.js
import { generarContrasena } from '../../modulo/passwordGen.js';

document.addEventListener('DOMContentLoaded', () => {
  const longitudInput = document.getElementById('longitud');
  const letrasCheckbox = document.getElementById('letras');
  const numerosCheckbox = document.getElementById('numeros');
  const simbolosCheckbox = document.getElementById('simbolos');
  const contrasenaGenerada = document.getElementById('contrasena-generada');
  const generarButton = document.getElementById('generar');

  generarButton.addEventListener('click', () => {
    const longitud = parseInt(longitudInput.value);
    const incluirLetras = letrasCheckbox.checked;
    const incluirNumeros = numerosCheckbox.checked;
    const incluirSimbolos = simbolosCheckbox.checked;

    if (longitud > 0) {
      const contrasena = generarContrasena(longitud, incluirLetras, incluirNumeros, incluirSimbolos);
      contrasenaGenerada.textContent = contrasena;
    } else {
      contrasenaGenerada.textContent = 'La longitud debe ser mayor que 0.';
    }
  });
});


// imgViewer
import { cargarImagenes } from '../../modulo/imgViewer.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarImagenes();
});
