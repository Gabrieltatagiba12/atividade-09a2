// Separação de responsabilidades
function saudacaoUsuario(usuario) {
  console.log('Bem-vinda ' + usuario);
}
function sistema() {
  const usuario = 'Ana';
  saudacaoUsuario(usuario);
  // ... mais lógica ...
}