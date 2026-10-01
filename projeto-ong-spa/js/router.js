import { templates } from './templates.js';
import { setupFormEventListeners } from './app.js';

export function handleRoute() {
  const hash = window.location.hash || '#/';
  const appRoot = document.getElementById('app-root');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentView = 'home';

  if (hash === '#/' || hash === '') {
    currentView = 'home';
    appRoot.innerHTML = templates.home();
  } else if (hash === '#/projetos') {
    currentView = 'projetos';
    appRoot.innerHTML = templates.projetos();
  } else if (hash === '#/cadastro') {
    currentView = 'cadastro';
    appRoot.innerHTML = templates.cadastro();
    setupFormEventListeners();
  } else {
    currentView = 'home';
    appRoot.innerHTML = templates.home();
  }

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-route') === currentView);
  });

  appRoot.focus();
}