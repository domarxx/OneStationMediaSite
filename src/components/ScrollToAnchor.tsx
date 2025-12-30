
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se tiver um # na URL (ex: #contato)
    if (hash) {
      // Espera um tiquinho (100ms) para garantir que a página carregou
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Se não tiver # (é uma mudança de página normal), joga pro topo
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToAnchor;