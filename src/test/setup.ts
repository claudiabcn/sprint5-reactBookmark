import { beforeEach } from 'vitest';
import '@testing-library/jest-dom'; // ⬅️ ¡Esta línea es clave!

beforeEach(() => {
  // Limpia el DOM antes de cada prueba
  document.body.innerHTML = '';
});