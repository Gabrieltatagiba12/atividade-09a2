// Ineficiente: busca linear
function busca(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) return i;
  }
  return -1;
}