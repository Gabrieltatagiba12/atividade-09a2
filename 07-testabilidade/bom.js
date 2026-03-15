// Permite mock e injeção de dependência
function getData(readFile) {
  return readFile('data.txt');
}
// Pode passar função mock em testes