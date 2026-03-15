// Seguro: uso de prepared statements
function buscarUsuario(nome) {
  db.query('SELECT * FROM usuarios WHERE nome = ?', [nome]);
}