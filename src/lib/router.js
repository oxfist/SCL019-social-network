export const router = {
  changeRoute: (hash) => {
    if (hash === '#home') {
      // Reemplaza '#home' al final de la URL por simplemente '/'
      window.history.replaceState({}, 'home', '/');
    } else if (hash === '#about') {
      // Reemplaza '#about' al final de la URL por simplemente '/about'
      window.history.replaceState({}, 'about', '/about');
    }
  },
};
