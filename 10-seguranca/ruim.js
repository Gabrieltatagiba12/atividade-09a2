// Vulnerável: SQL Injection
function buscarUsuario(nome) {
  db.query("SELECT * FROM usuarios WHERE nome = '" + nome + "'");
}