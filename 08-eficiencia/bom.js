// Eficiente: uso de objeto para busca
function busca(map, valor) {
  return map.hasOwnProperty(valor) ? map[valor] : -1;
}