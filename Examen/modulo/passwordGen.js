// generador-contrasenas/generador.js

// Función para generar una contraseña aleatoria
export function generarContrasena(longitud, incluirLetras, incluirNumeros, incluirSimbolos) {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let caracteresPermitidos = '';
  
    if (incluirLetras) {
      caracteresPermitidos += letras;
    }
    if (incluirNumeros) {
      caracteresPermitidos += numeros;
    }
    if (incluirSimbolos) {
      caracteresPermitidos += simbolos;
    }
  
    let contrasenaGenerada = '';
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasenaGenerada += caracteresPermitidos.charAt(randomIndex);
    }
  
    return contrasenaGenerada;
  }
  