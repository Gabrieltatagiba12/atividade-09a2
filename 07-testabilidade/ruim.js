// Dependência fixa, difícil de testar
function getData() {
  return require('fs').readFileSync('data.txt', 'utf8');
}