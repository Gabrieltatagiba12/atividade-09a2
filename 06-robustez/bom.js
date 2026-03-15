// Trata erros e entradas inválidas
function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parâmetros devem ser números');
  }
  if (b === 0) {
    throw new Error('Divisão por zero');
  }
  return a / b;
}