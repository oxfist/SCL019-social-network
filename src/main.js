import { router } from './lib/router.js';

import { homeContent } from './views/home.js';
import { aboutContent } from './views/about.js';

const linkContent = {
  '#home': homeContent,
  '#about': aboutContent,
};

const routes = {
  '/': homeContent,
  '/about': aboutContent,
};

const rootDiv = document.getElementById('root');

// Esto asegura que al recargar la página, se muestra el contenido correcto
const currentPath = window.location.pathname;
rootDiv.innerHTML = routes[currentPath];

window.addEventListener('hashchange', () => {
  const selectedLink = window.location.hash;
  router.changeRoute(selectedLink);
  rootDiv.innerHTML = linkContent[selectedLink];
});

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
