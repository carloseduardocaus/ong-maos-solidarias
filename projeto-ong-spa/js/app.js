import { handleRoute } from './router.js';
import { storage } from './storage.js';
import { validarNome, validarEmail, validarTelefone, aplicarMascaraTelefone } from './validators.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  initTheme();
  setupGlobalDelegation();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme_preference');
  if (savedTheme === 'high-contrast') {
    document.body.setAttribute('data-theme', 'high-contrast');
    toggleBtn.setAttribute('aria-pressed', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    const isHC = document.body.getAttribute('data-theme') === 'high-contrast';
    if (isHC) {
      document.body.removeAttribute('data-theme');
      toggleBtn.setAttribute('aria-pressed', 'false');
      localStorage.setItem('theme_preference', 'normal');
    } else {
      document.body.setAttribute('data-theme', 'high-contrast');
      toggleBtn.setAttribute('aria-pressed', 'true');
      localStorage.setItem('theme_preference', 'high-contrast');
    }
  });
}

function setupGlobalDelegation() {
  const appRoot = document.getElementById('app-root');
  const modal = document.getElementById('modal-container');
  const modalClose = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-content-area');

  if (!appRoot || !modal || !modalClose || !modalContent) return;

  appRoot.addEventListener('click', (e) => {
    const btnDetalhes = e.target.closest('.btn-ver-detalhes');
    if (btnDetalhes) {
      const projNome = btnDetalhes.getAttribute('data-projeto');
      modalContent.innerHTML = `
        <h3 style="color: var(--primary); margin-bottom: 0.75rem;">${projNome}</h3>
        <p>Ação comunitária contínua executada por voluntários locais e apoiadores da rede Mãos Solidárias.</p>
      `;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      modalClose.focus();
    }
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

export function setupFormEventListeners() {
  const form = document.getElementById('form-cadastro');
  const telInput = document.getElementById('campo-tel');
  if (!form || !telInput) return;

  telInput.addEventListener('input', (e) => {
    e.target.value = aplicarMascaraTelefone(e.target.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('campo-nome');
    const email = document.getElementById('campo-email');
    const tel = document.getElementById('campo-tel');
    const area = document.getElementById('campo-area');

    const vNome = validarNome(nome.value);
    const vEmail = validarEmail(email.value);
    const vTel = validarTelefone(tel.value);

    nome.setAttribute('aria-invalid', !vNome);
    email.setAttribute('aria-invalid', !vEmail);
    tel.setAttribute('aria-invalid', !vTel);

    if (vNome && vEmail && vTel) {
      storage.saveVoluntario({
        nome: nome.value.trim(),
        email: email.value.trim(),
        telefone: tel.value.trim(),
        area: area.value,
        data: new Date().toISOString()
      });

      if (window.Swal) {
        Swal.fire({
          title: 'Cadastro Concluído!',
          text: 'Obrigado por apoiar a ONG Mãos Solidárias.',
          icon: 'success',
          confirmButtonColor: '#1b5e20'
        });
      } else {
        alert('Cadastro realizado com sucesso!');
      }

      form.reset();
    }
  });
}