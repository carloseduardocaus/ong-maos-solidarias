export function validarNome(nome) {
  return nome.trim().length >= 3;
}

export function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validarTelefone(tel) {
  const digits = tel.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}

export function aplicarMascaraTelefone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 14);
  }
  return digits
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
}